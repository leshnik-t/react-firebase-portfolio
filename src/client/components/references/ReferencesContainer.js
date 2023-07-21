import { useState, useEffect } from 'react';
import { endPointReferencesWithImage, endPointReferencesWithRating } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import ReferenceWithImageItem from './ReferenceWithImageItem';
import ReferenceWithRatingItem from './ReferenceWithRatingItem';
import './references-container.css';


const ReferencesContainer = () => {
    const [imageReferences, setImageReferences] = useState(null);
    const responseImageReferences = useFetchRealtimeFirebase(endPointReferencesWithImage);
    const [ratingReferences, setRatingReferences] = useState(null);
    const responseRatingReferences = useFetchRealtimeFirebase(endPointReferencesWithRating);

    useEffect(() => {
        setImageReferences(processListData(responseImageReferences.data));
    }, [responseImageReferences.data]);

    useEffect(() => {
        setRatingReferences(processListData(responseRatingReferences.data));
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
                    {!responseImageReferences.fetchError && !responseImageReferences.isLoading && imageReferences && imageReferences.map((item) => 
                        <ReferenceWithImageItem item={item} key={item.id}/>
                    )}
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    {responseRatingReferences.isLoading && <p>Loading Items...</p>}
                    {responseRatingReferences.fetchError && 
                        <p style={{color: "red"}}>{`Error: ${responseRatingReferences.fetchError}`}</p>
                    }
                    {!responseRatingReferences.fetchError && !responseRatingReferences.isLoading && ratingReferences && ratingReferences.map((item) => 
                        <ReferenceWithRatingItem item={item} key={item.id}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReferencesContainer;