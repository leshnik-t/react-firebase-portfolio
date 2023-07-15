import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';

const ImageLoader = ( { url, alt } ) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(url);

    useEffect(() => {
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl]);

    return (
        <>
            { responseImageUrl.isLoading && 
                <div className="img-placeholder img-rectangle"></div> 
            }
            { responseImageUrl.fetchError && 
                <p className="alert alert-danger">{`Error: ${responseImageUrl.fetchError}`}</p> 
            }
            { !responseImageUrl.fetchError && !responseImageUrl.isLoading && 
                <img src={imgUrl} alt={alt} className="img-fluid"/>
            }
        </>
    )
}

export default ImageLoader;