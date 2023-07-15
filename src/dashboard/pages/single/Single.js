import './single.css';
import { useEffect, useState } from 'react';
import { databaseURL } from '../../../config/firebase';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import { Link, useLocation } from 'react-router-dom';

const Single = () => {
    const [item, setItem] = useState([]);
    const location = useLocation();
    const itemPath = location.pathname.slice(1).split("/");
    const collectionName = itemPath[1];
    const itemID = itemPath[2];

    const API_URL = `${databaseURL}/${collectionName}/${itemID}.json`;
    const response = useFetchRealtimeFirebase(API_URL);

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
            {!response.fetchError && !response.isLoading &&
                <>
                    <div className="details">
                        <div className="details-item">
                            <div className="item-key">Post order name:</div>
                            <div className="item-value">{item.orderName}</div>
                        </div>
                        <div className="details-item">
                            <div className="item-key">Title:</div>
                            <div className="item-value">{item.title}</div>
                        </div>
                        <div className="details-item">
                            <div className="item-key">Text:</div>
                            <div className="item-value">{item.text}</div>
                        </div>
                    </div>
                    <Link
                        to={`/dashboard/${collectionName}/${itemID}/edit`}
                        className="btn btn-primary mb-3"
                    >
                        Edit
                    </Link>
                </>
            }
        </main>
    )
}

export default Single;