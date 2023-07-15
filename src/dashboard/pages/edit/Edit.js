import './edit.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { storage, databaseURL } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from '../../../context/AuthContext';
import apiRequest from '../../helpers/apiRequest';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';

import renderFormByCollectionName from '../../helpers/renderFormByCollectionName';
import NoImage from '../../assets/images/no-image-icon-0.jpg';

const Edit = ({ collectionName, pageTitle}) => {
    const location = useLocation();
    const itemID = location.pathname.slice(1).split("/")[2];

    const API_URL = `${databaseURL}/${collectionName}/${itemID}.json`;
    const response = useFetchRealtimeFirebase(API_URL);

    useEffect(() => {
        setData(response.data); 
    }, [response.data]);

    const { currentUser } = useAuth();
    const [data, setData] = useState({});
    const [file, setFile] = useState('');
    const [percentage, setPercentage] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [status, setStatus] = useState(false);

    const ID_TOKEN = currentUser.stsTokenManager.accessToken;

    // useEffect(() => {
    //     const uploadFile = (imageFolder) => {
    //         const storageRef = ref(storage, 'images/' + imageFolder + '/' + file.name);
    //         const uploadTask = uploadBytesResumable(storageRef, file);

    //         // Register three observers:
    //         // 1. 'state_changed' observer, called any time the state changes
    //         // 2. Error observer, called on failure
    //         // 3. Completion observer, called on successful completion
    //         uploadTask.on('state_changed', 
    //             (snapshot) => {
    //                 // Observe state change events such as progress, pause, and resume
    //                 // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log('Upload is ' + progress + '% done');
    //                 setPercentage(progress);
    //                 switch (snapshot.state) {
    //                         case 'paused':
    //                             console.log('Upload is paused');
    //                             break;
    //                         case 'running':
    //                             console.log('Upload is running');
    //                             break;
    //                         default: break;
    //                 }
    //             }, 
    //             (error) => {
    //                 setPercentage(null);
    //                 setAuthError("You don't have permision to upload!")
    //             }, 
    //             () => {
    //                 // Handle successful uploads on complete
    //                 // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    //                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                     console.log('File available at', downloadURL);
    //                     setData((prev) => ({...prev, img: downloadURL}));
    //                 });
    //             }
    //         );

    //     };

    //     file && uploadFile(collectionName);
    // },[file, collectionName]);

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

    const updateItem = async (endPoint, token) => {

        const patchOptions = {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        const reqUrl = endPoint + '?auth=' + token;
        const result = await apiRequest(reqUrl, patchOptions);
        if (result) setFetchError("You don't have permissions to edit!")
        else {
            setStatus(true)
            setTimeout(() => {
                setStatus(false);
            }, 2000);
            
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem(API_URL, ID_TOKEN);
    }

    return (
        <main className="edit">
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
                    {renderFormByCollectionName(collectionName, handleChangeInput, handleSubmit, data, true) }
                    <div className="alert-container">
                        {fetchError && 
                            <p className="alert alert-danger" role="alert">{fetchError}</p>
                        }
                        {status && 
                            <p className="alert alert-warning"  role="alert">The post is updated!</p>
                        }
                    </div>
                </div>
                
            </div>
        </main>
        
    )
}

export default Edit;