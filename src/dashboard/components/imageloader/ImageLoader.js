import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';

const ImageLoader = ( { url, alt, cssImagePlaceholder } ) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(url);

    useEffect(() => {
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl.imgUrl]);

    return (
        <>
            { responseImageUrl.isLoading && 
                <div className={`img-placeholder ${cssImagePlaceholder}`}></div> 
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