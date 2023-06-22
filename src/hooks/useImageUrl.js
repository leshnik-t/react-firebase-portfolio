import { useState, useEffect } from 'react';
import { getDownloadURL, ref } from '@firebase/storage';
import { storage } from '../config/firebase';

const useImageUrl = (dataUrl) => {
    const [imgUrl, setImgUrl] = useState('');
    const [fetchError, setFetchError]  = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const resolveImageURL = async (url) => {
            setIsLoading(true);
            try {
                const imageURL = await getDownloadURL(ref(storage, url));
                setImgUrl(imageURL);
                setFetchError(null);

            } catch (err) {
                setFetchError(err.message);
                setImgUrl('');
               
            } finally {
                setIsLoading(false);
            }
        }
        
        resolveImageURL(dataUrl);

    }, [dataUrl]);

    return { imgUrl, fetchError, isLoading };
}

export default useImageUrl;