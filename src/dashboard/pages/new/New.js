import './new.css';
import { useState, useEffect, useRef } from 'react';
import { storage, databaseURL } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import apiRequest from '../../helpers/apiRequest';
import renderFormByCollectionName from '../../helpers/renderFormByCollectionName';
import NoImage from '../../assets/images/no-image-icon-0.jpg';

const New = ({ collectionName, pageTitle }) => {
    const { currentUser } = useAuth();
    const [item, setItem] = useState({});
    const [file, setFile] = useState('');
    const [percentage, setPercentage] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [status, setStatus] = useState(false);

    const ID_TOKEN = currentUser.stsTokenManager.accessToken;
    const API_URL = `${databaseURL}/${collectionName}`;

    const isTemplateWithImage = ((collectionName === 'references-rating') 
                                    || (collectionName === 'videos') 
                                ) ? false : true;

    // buttons vars and handlers
    const [buttons, setButtons] = useState([]);
    let buttonCounter = useRef(1);

    const handleAddButton = (e) => {
        buttonCounter.current = buttonCounter.current + 1;
        addButton(buttonCounter.current);
    }
    
    const handleDeleteButton = (e) => {
        const choice = window.confirm(
            "Are you sure you want to delete the post?"
        )
        if (choice) {
            const id = e.target.id;
            deleteButton(id, item);
        }
    }

    const deleteButton = (id, currentItem) => {
        const buttonsList = buttons.filter((item) => Number(item.id) !== Number(id));
        const newItemData = JSON.parse(JSON.stringify(currentItem));
        delete newItemData[`btn${id}`];
        setItem(newItemData);
        setButtons(buttonsList);
    }

    const addButton = (id) => {
        const newButton = {id};
        const buttonsList = [...buttons, newButton];
        setButtons(buttonsList);
    }

    // videos vars and handlers
    const [videos, setVideos] = useState([]);
    let videoCounter = useRef(1);

    const handleAddVideo = (e) => {
        videoCounter.current = videoCounter.current + 1;
        addVideo(videoCounter.current);
    }
    
    const handleDeleteVideo = (e) => {
        const choice = window.confirm(
            "Are you sure you want to delete the post?"
        )
        if (choice) {
            const id = e.target.id;
            deleteVideo(id, item);
        }
    }

    const deleteVideo = (id, currentItem) => {
        const videosList = videos.filter((item) => Number(item.id) !== Number(id));
        const newItemData = JSON.parse(JSON.stringify(currentItem));
        delete newItemData[`video${id}`];
        setItem(newItemData);
        setVideos(videosList);
    }

    const addVideo = (id) => {
        const newVideo = {id};
        const videosList = [...videos, newVideo];
        setVideos(videosList);
    }

    const getMobileUrl = (url) => {
        const mobileUrl = url.slice(0, -11) + '-mobile.jpg';

        return mobileUrl;
    }

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
                        const url = `images/${collectionName}/${file.name}`;
                        const imgObject = {
                            url : url,
                            alt : item.img ? item.img.alt : '',
                            mobileurl : getMobileUrl(url)
                        }
                        setItem((prev) => ({...prev, img: imgObject}));
                        setTimeout(()=> {
                            setPercentage(null);
                        }, 2000)
                    });
                }
            );

        };

        file && uploadFile(collectionName);
    },[file, collectionName]);

    const handleChangeInput = (e) => {
        let id = e.target.id;
        const value = e.target.value;
        let buttonPropertiesArray = [];
        let videoPropertiesArray = [];
       

        const getObjectProperties = (id, type, value, currentItem)  => {
            const objNumber = id.match(/\d+/)[0];
            const objName = (type === 'btn') ? `btn${objNumber}` : `video${objNumber}`;
            const currentProperty = id.slice(-4);
            const objProperties = {
                text: currentItem[objName] ? currentItem[objName].text : '',
                link: currentItem[objName] ? currentItem[objName].link : '',
            }
            
            if (currentProperty === 'text') {
                objProperties.text = value;
            } else {
                objProperties.link = value;
            }

            return [objName, objProperties];
        }

        if (id.indexOf('btn') !== -1) {
            buttonPropertiesArray = getObjectProperties(id, 'btn', value, item);
            id = 'btn';
        }

        if (id.indexOf('video') !== -1) {
            videoPropertiesArray = getObjectProperties(id, 'video', value, item);
            id = 'video';
        }

        switch(id) {
            case "file": {
                setFile(e.target.files[0]);
                break;
            }
            case "alt": {
                const imgObject = {
                    url : item.img ? item.img.url : '',
                    alt : value,
                    mobileurl : item.img ? getMobileUrl(item.img.url) : ''
                }
                setItem({...item, img : imgObject });
                break;
            }
            case "btn": {
                setItem({...item, [buttonPropertiesArray[0]] : buttonPropertiesArray[1]});
                break;
            }
            case "video": {
                setItem({...item, [videoPropertiesArray[0]] : videoPropertiesArray[1]});
                break;
            }
            default: {
                setItem({...item, [id] : value});
                break;
            }
        }
    }

    const addItem = async (endPoint, token) => {

        const postOptions = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
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
        setItem({});
        setFile('');
        setButtons([]);
        setVideos([]);
        setPercentage(null);
        setAuthError(null);
        setFetchError(null);
        document.getElementsByTagName('form')[0].reset();
        setStatus(true);
        buttonCounter.current = 1;
    }

    return (
        <main className="new">
            <div className="mb-3">
                <Link to={`/dashboard/${collectionName}`}>&laquo; Back to {collectionName} list</Link>
            </div>
            <h1>{pageTitle}</h1>
            <div className="content">
                {isTemplateWithImage &&
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : NoImage} alt="" className="img-fluid"/>
                        <div className="alert-container">
                            {file && <p>{file.name}</p> }
                            {!authError && percentage !==null && percentage < 100 && <p className="alert alert-warning" role="alert">Uploading the image</p> }
                            {percentage !== null && percentage === 100 && <p className="alert alert-warning"  role="alert">Image is uploaded</p> }
                            {authError && <p className="alert alert-danger" role="alert">{authError}</p> }
                        </div>
                    </div>
                }
                <div className="right">
                    {renderFormByCollectionName(
                        collectionName, 
                        handleChangeInput, 
                        handleSubmit, 
                        item, 
                        false, 
                        percentage,
                        buttons,
                        handleAddButton,
                        handleDeleteButton,
                        videos,
                        handleAddVideo,
                        handleDeleteVideo
                    )}
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