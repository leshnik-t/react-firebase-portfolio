import "./logo-post.css";
import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';

const JavascriptPost = ({ item }) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(item.img.url);
    const [imgUrlMobile, setImgUrlMobile] = useState('');
    const responseImageUrlMobile = useImageUrl(item.img.mobileurl);

    useEffect(() => {
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl.imgUrl]);

    useEffect(() => {
        setImgUrlMobile(responseImageUrlMobile.imgUrl)
    }, [responseImageUrlMobile.imgUrl]);

    return (
        <section className="secondary-section post-item logo-post" id={item.orderName}>
            <h2>{item.title}</h2>
            <div className="image-container">
            { responseImageUrl.isLoading && <div className="img-placeholder"></div> }
            { responseImageUrl.fetchError && <p style={{color: "red"}}>{`Error: ${responseImageUrl.fetchError}`}</p> }
            { !responseImageUrl.fetchError && !responseImageUrl.isLoading && 
                <picture>
                    <source media="(max-width: 767px)" srcSet={imgUrlMobile}/>
                    <source media="(min-width: 768px)" srcSet={imgUrl}/>
                    <img src={imgUrl} alt={item.img.alt} className="img-fluid"/>
                </picture>
            }
            </div>
        </section>
    )
}

export default JavascriptPost;