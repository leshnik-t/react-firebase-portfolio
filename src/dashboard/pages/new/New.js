import './new.css';
import { useState, useEffect } from 'react';
import { storage, databaseURL } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import apiRequest from '../../helpers/apiRequest';

import renderFormByCollectionName from '../../helpers/renderFormByCollectionName';
import NoImage from '../../assets/images/no-image-icon-0.jpg';

const New = ({ collectionName, pageTitle }) => {
    const { currentUser } = useAuth();
    const [data, setData] = useState({});
    const [file, setFile] = useState('');
    const [percentage, setPercentage] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [status, setStatus] = useState(false);

    const ID_TOKEN = currentUser.stsTokenManager.accessToken;
    const API_URL = `${databaseURL}/${collectionName}`;

    useEffect(() => {
        const uploadFile = (imageFolder) => {
            const storageRef = ref(storage, 'images/' + imageFolder + '/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPercentage(progress);
                    switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                            default: break;
                    }
                }, 
                (error) => {
                    setPercentage(null);
                    setAuthError("You don't have permision to upload!")
                }, 
                () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setData((prev) => ({...prev, img: downloadURL}));
                    });
                }
            );

        };

        file && uploadFile(collectionName);
    },[file, collectionName]);

    const handleChangeInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        if (id === "file") {
            // const filePath = 'images/'+ dataType + '/' + e.target.files[0].name;
            // const alt = "some alt goes here"
            setFile(e.target.files[0]);
            // setData({...data, "filePath" : filePath });
            // setData({..data, "alt" : alt});
        } else {
            setData({...data, [id] : value});
        }
    }

    const addItem = async (endPoint, token) => {

        const postOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        
        const reqUrl = endPoint + '.json?auth=' + token;
        const result = await apiRequest(reqUrl, postOptions);
        if (result) setFetchError("You don't have permissions to post!")
        else {
            resetAfterPost();
            setTimeout(() => {
                setStatus(false);
            }, 2000);
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(API_URL, ID_TOKEN);
    }

    const resetAfterPost = () => {
        setData({});
        setFile('');
        setPercentage(null);
        setAuthError(null);
        setFetchError(null);
        document.getElementsByTagName('form')[0].reset();
        setStatus(true);
    }

    return (
        <main className="new">
            <div className="mb-3">
                <Link to={`/dashboard/${collectionName}`}>&laquo; Back to {collectionName} list</Link>
            </div>
            <h1>{pageTitle}</h1>
            <div className="content">
                <div className="left">
                    {file &&
                        <img src={file ? URL.createObjectURL(file) : NoImage} alt="" className="img-fluid"/>
                    }
                    <div className="alert-container">
                        {file && <p>{file.name}</p> }
                        {!authError && percentage !==null && percentage < 100 && <p className="alert alert-warning" role="alert">Uploading the image</p> }
                        {percentage !== null && percentage === 100 && <p className="alert alert-warning"  role="alert">Image is uploaded</p> }
                        {authError && <p className="alert alert-danger" role="alert">{authError}</p> }
                    </div>
                </div>
                <div className="right">
                    {renderFormByCollectionName(collectionName, handleChangeInput, handleSubmit, data) }
                    <div className="alert-container">
                        {fetchError && 
                            <p className="alert alert-danger" role="alert">{fetchError}</p>
                        }
                        {status && 
                            <p className="alert alert-warning"  role="alert">The post is added!</p>
                        }
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default New;