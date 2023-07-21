import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';

const ReferenceWithImageItem = ({ item }) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(item.img.url);
    
    useEffect(() => {
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl])

    const textContent = item.text.split('|');
    const formatedText = textContent.map((paragraph, index) =>
        <p key={index}>{paragraph}</p>
    )

    return (
        <div className="reference-block">
            <div className="reference-image">
                {responseImageUrl.isLoading && 
                    <div className="img-placeholder reference img-circle"></div> 
                }
                {responseImageUrl.fetchError && 
                    <p style={{color: "red"}}>{`Error: ${responseImageUrl.fetchError}`}</p> 
                }
                {!responseImageUrl.fetchError && !responseImageUrl.isLoading && 
                    <img src={imgUrl} alt={item.img.alt} className="img-circle" width="100" height="100" />
                }
            </div>
            <div className="reference-text">
                {formatedText}
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}

export default ReferenceWithImageItem;