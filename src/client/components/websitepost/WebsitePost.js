import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useImageUrl';

const WebsitePost = ({ item }) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(item.img.setscreen);
    const [imgUrlMobile, setImgUrlMobile] = useState('');
    const responseImageUrlMobile = useImageUrl(item.img.setmobile);

    useEffect(() => {
        console.log("response url",responseImageUrl.imgUrl);
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl.imgUrl])

    useEffect(() => {
        setImgUrlMobile(responseImageUrlMobile.imgUrl)
    }, [responseImageUrlMobile.imgUrl])

    return (
        <section className="secondary-section post-item" id={item[0]}>
            <h2>{item.title}</h2>
            <p><span>Industry:</span> {item.industry}</p>
            <p><span>Technology Leveraged:</span>{item.tech}</p>
            <div className="container-buttons-inline">
                <a href="/" className="btn btn-primary" title="Visit Site" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a href="https://www.mokeez.com/blog/" className="btn btn-primary" title="Visit Live Blog" target="_blank" rel="noopener noreferrer">Visit Live Blog</a>
            </div>
            <a href="/" title="Visit Site" target="_blank" rel="noopener noreferrer">
                <div className="image-container website">
                { responseImageUrl.isLoading && <div className="img-placeholder websites"></div> }
                { responseImageUrl.fetchError && <p style={{color: "red"}}>{`Error: ${responseImageUrl.fetchError}`}</p> }
                { !responseImageUrl.fetchError && !responseImageUrl.isLoading && 
                    <picture>
                        <source media="(max-width: 767px)" srcSet={imgUrlMobile}/>
                        <source media="(min-width: 768px)" srcSet={imgUrl}/>
                        <img src={imgUrl} alt={item.img.alt} className="img-fluid"/>
                    </picture>
                }
                </div>
            </a>
        </section>
    )
}

export default WebsitePost;