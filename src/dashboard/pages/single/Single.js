import './single.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { databaseURL } from '../../../config/firebase';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import ImageLoaderContainer from '../../components/imageloadercontainer/ImageLoaderContainer';
import ItemDetails from '../../components/itemdetails/ItemDetails';

const Single = () => {
    const [item, setItem] = useState(null);
    const location = useLocation();
    const itemPath = location.pathname.slice(1).split("/");
    const collectionName = itemPath[1];
    const itemID = itemPath[2];

    const API_URL = `${databaseURL}/${collectionName}/${itemID}.json`;
    const response = useFetchRealtimeFirebase(API_URL);

    const cssImagePlaceholder = (collectionName === 'references-image') ? 'reference' : 'default';

    useEffect(() => {
        setItem(response.data); 
    }, [response.data]);

    return (
        <main className="single">
            <div className="mb-3">
                <Link to={`/dashboard/${collectionName}`}>&laquo; Back to {collectionName} list</Link>
            </div>
            <h1>Single post {collectionName}, ID: {itemID}</h1>
            <div className="alert-container">
                {response.isLoading && 
                    <p className="alert alert-warning">Loading Information...</p>
                }
                {response.fetchError && 
                    <p className="alert alert-danger">{`Error: ${response.fetchError}`}</p>
                }
            </div>
            {!response.fetchError && !response.isLoading && item &&
                <>
                    <Link
                        to={`/dashboard/${collectionName}/${itemID}/edit`}
                        className="btn btn-primary mb-3"
                    >
                        Edit
                    </Link>
                    <div className="details">
                        <ImageLoaderContainer 
                            item={item} 
                            cssImagePlaceholder={cssImagePlaceholder} 
                        />
                        <ItemDetails item={item}/>
                    </div>
                </>
                
            }
        </main>
    )
}

export default Single;