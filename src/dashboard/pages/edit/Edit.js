import './edit.css';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { storage, databaseURL } from '../../../config/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useAuth } from '../../../context/AuthContext';
import apiRequest from '../../helpers/apiRequest';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import ImageLoaderContainer from '../../components/imageloadercontainer/ImageLoaderContainer';
import renderFormByCollectionName from '../../helpers/renderFormByCollectionName';

const Edit = ({ collectionName, pageTitle}) => {
    const location = useLocation();
    const itemID = location.pathname.slice(1).split("/")[2];
    const API_URL = `${databaseURL}/${collectionName}/${itemID}.json`;
    const response = useFetchRealtimeFirebase(API_URL);

    const { currentUser } = useAuth();
    const [item, setItem] = useState({});
    const [file, setFile] = useState('');
    const [percentage, setPercentage] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [status, setStatus] = useState(false);

    const ID_TOKEN = currentUser.stsTokenManager.accessToken;

    const cssImagePlaceholder = (collectionName === 'references-image') ? 'reference' : 'default';
    const isTemplateWithImage = (collectionName === 'references-rating') ? false : true;

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

    const getMobileUrl = (url) => {
        const mobileUrl = url.slice(0, -11) + '-mobile.jpg';

        return mobileUrl;
    }

    const getHighestBtnId = (item)  => {
        if (item === null) return 1;

        const btnsArrayKeys = [];
        for (const key of Object.keys(item)) {
            if (key.includes('btn')) {
                const keyAsNumber = Number(key.match(/\d+/)[0]);
                btnsArrayKeys.push(keyAsNumber);
            }
        }

        if (btnsArrayKeys.length === 1) {
           return btnsArrayKeys[0];
        }

        if (btnsArrayKeys.length > 1) {
            btnsArrayKeys.sort((a, b) => b - a);
        }

        return btnsArrayKeys[0];
    }

    

    const getAdditionalButtons = (item) => {
        if (item === null) return [];

        const btnsArrayKeys = [];
        for (const key of Object.keys(item)) {
            if (key.includes('btn')) {
                const keyAsNumber = Number(key.match(/\d+/)[0]);
                
                btnsArrayKeys.push({id : keyAsNumber});
            }
        }

        if (btnsArrayKeys.length === 1) return [];

        if (btnsArrayKeys.length > 1) {
            btnsArrayKeys.sort((a, b) => a - b);
            btnsArrayKeys.shift();
        }

        return btnsArrayKeys;
    }

    useEffect(() => {
        setItem(response.data);
        buttonCounter.current = getHighestBtnId(response.data);
        setButtons(getAdditionalButtons(response.data))
    }, [response.data]);

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

        const getBtnProperties = (id, value, currentItem)  => {
            const btnNumber = id.match(/\d+/)[0];
            const btnName = `btn${btnNumber}`;
            const currentProperty = id.slice(-4);
            const btnPropertiesObject = {
                text: currentItem[btnName] ? currentItem[btnName].text : '',
                link: currentItem[btnName] ? currentItem[btnName].link : '',
            }
            
            if (currentProperty === 'text') {
                btnPropertiesObject.text = value;
            } else {
                btnPropertiesObject.link = value;
            }
    
            return [btnName, btnPropertiesObject];
        }

        if (id.indexOf('btn') !== -1) {
            buttonPropertiesArray = getBtnProperties(id, value, item);
            id = 'btn';
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
                setItem({...item, [buttonPropertiesArray[0]] : buttonPropertiesArray[1] });
                break;
            }
            default: {
                setItem({...item, [id] : value});
                break;
            }
        }
    }

    const updateItem = async (endPoint, token) => {

        const patchOptions = {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
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
                {item && isTemplateWithImage &&
                    <div className="image-container">
                        <ImageLoaderContainer 
                            item={item}
                            cssImagePlaceholder={cssImagePlaceholder}
                        />
                        <div className="alert-container">
                            {file && <p>{file.name}</p> }
                            {!authError && percentage !==null && percentage < 100 && <p className="alert alert-warning" role="alert">Uploading the image</p> }
                            {percentage !== null && percentage === 100 && <p className="alert alert-warning"  role="alert">Image is uploaded</p> }
                            {authError && <p className="alert alert-danger" role="alert">{authError}</p> }
                        </div>
                    </div>
                }
                <div className="right">
                    <div className="alert-container">
                        {response.isLoading && 
                            <p className="alert alert-warning">Loading Information...</p>
                        }
                        {response.fetchError && 
                            <p className="alert alert-danger">{`Error: ${response.fetchError}`}</p>
                        }
                    </div>
                    {!response.fetchError && !response.isLoading && item &&
                        renderFormByCollectionName(
                            collectionName, 
                            handleChangeInput, 
                            handleSubmit, 
                            item, 
                            true, 
                            percentage,
                            buttons,
                            handleAddButton,
                            handleDeleteButton
                        ) 
                    }
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