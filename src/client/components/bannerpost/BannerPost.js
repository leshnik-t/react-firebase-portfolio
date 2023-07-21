import "./banner-post.css";
import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';
import { Link } from 'react-router-dom';

const BannerPost = ({ item }) => {
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

    const getButtonsList = (itemData) => {
        const btnsArray = [];
        const btnsMap = new Map();
        const btnsArrayKeys = [];
        let imageLinkUrl = '/';
        let imageLinkUrlTitle = '';

        for (const [key, value] of Object.entries(item)) {
            if ( key.includes('btn')) {
                const keyAsNumber = Number(key.match(/\d+/)[0]);
                btnsMap.set(key, {id: key, ...value});
                btnsArrayKeys.push(keyAsNumber);
            }
        }
        
        imageLinkUrl = btnsMap.get(`btn1`).link;
        imageLinkUrlTitle = btnsMap.get(`btn1`).text;
        
        if (btnsArrayKeys.length > 0) {
            btnsArrayKeys.sort((a, b) => a - b);
            btnsArrayKeys.forEach((btnId) => {
                btnsArray.push(
                    <Link 
                        key={btnsMap.get(`btn${btnId}`).id}
                        to={btnsMap.get(`btn${btnId}`).link}
                        className="btn btn-primary" 
                        title={btnsMap.get(`btn${btnId}.value.text`)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {btnsMap.get(`btn${btnId}`).text} 
                    </Link>
                )
            })
        }

        return [btnsArray, imageLinkUrl, imageLinkUrlTitle];
    }

    const [buttonsList, imageLinkUrl, imageLinkUrlTitle] = getButtonsList(item);

    return (
        <section className="secondary-section post-item banner-post" id={item.orderName}>
            <h2>{item.title}</h2>
            <div className="container-buttons-inline">
                {(buttonsList.length > 0) && buttonsList}
            </div>
            <Link 
                to={imageLinkUrl}
                title={imageLinkUrlTitle} 
                target="_blank" 
                rel="noopener noreferrer"
            >
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
            </Link>
        </section>
    )
}

export default BannerPost;