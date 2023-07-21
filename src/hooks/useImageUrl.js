import { useState, useEffect, useRef } from 'react';
import { getDownloadURL, ref } from '@firebase/storage';
import { storage } from '../config/firebase';

const useImageUrl = (dataUrl) => {
    const [imgUrl, setImgUrl] = useState('');
    const [fetchError, setFetchError]  = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {
        const resolveImageURL = async (url) => {
            mounted.current = true;
            setIsLoading(true);
            try {
                const imageURL = await getDownloadURL(ref(storage, url));

                if (mounted.current) {
                    setImgUrl(imageURL);
                    setFetchError(null);
                }
            } catch (err) {
                if (mounted.current) {
                    setFetchError(err.message);
                    setImgUrl('');
                }
            } finally {
                if (mounted.current) {
                    setIsLoading(false);
                }
            }
        }
        
        resolveImageURL(dataUrl);

         return () => mounted.current = false;
    }, [dataUrl]);

    return { imgUrl, fetchError, isLoading };
}

export default useImageUrl;