import { useState, useEffect } from 'react';
import { endPointReferencesWithImage, endPointReferencesWithRating } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import ReferenceWithImageItem from './ReferenceWithImageItem';
import ReferenceWithRatingItem from './ReferenceWithRatingItem';
import './references-container.css';


const ReferencesContainer = () => {
    const [imageReferences, setImageReferences] = useState([]);
    const responseImageReferences = useFetchRealtimeFirebase(endPointReferencesWithImage);
    const [ratingReferences, setRatingReferences] = useState([]);
    const responseRatingReferences = useFetchRealtimeFirebase(endPointReferencesWithRating);

    useEffect(() => {
        if (responseImageReferences.data.length === 0) return;

        setImageReferences(responseImageReferences.data);
    }, [responseImageReferences.data]);

    useEffect(() => {
        setRatingReferences(responseRatingReferences.data);
    }, [responseRatingReferences.data]);
    
    return (
        <div className="reference-list-container">
            <h2>What do <span className="text-red">people say</span> about me</h2>
            <div className="row gx-5 gy-5">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                    {responseImageReferences.isLoading && <p>Loading Items...</p>}
                    {responseImageReferences.fetchError && 
                        <p style={{color: "red"}}>{`Error: ${responseImageReferences.fetchError}`}</p>
                    }
                    {!responseImageReferences.fetchError && !responseImageReferences.isLoading && imageReferences.map((item) => 
                        <ReferenceWithImageItem item={item} key={item[0]}/>
                    )}
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    {responseRatingReferences.isLoading && <p>Loading Items...</p>}
                    {responseRatingReferences.fetchError && 
                        <p style={{color: "red"}}>{`Error: ${responseRatingReferences.fetchError}`}</p>
                    }
                    {!responseRatingReferences.fetchError && !responseRatingReferences.isLoading && ratingReferences.map((item) => 
                        <ReferenceWithRatingItem item={item} key={item[0]}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReferencesContainer;