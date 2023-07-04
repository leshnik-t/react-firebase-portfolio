import { useState, useEffect } from 'react';
import useImageUrl from '../../../hooks/useFetchRealtimeFirebase';

const WebsitePost = ({ item }) => {
    const [imgUrl, setImgUrl] = useState('');
    const responseImageUrl = useImageUrl(item[1].img.setscreen);
    const [imgUrlMobile, setImgUrlMobile] = useState('');
    const responseImageUrlMobile = useImageUrl(item[1].img.setmobile);

    useEffect(() => {
        setImgUrl(responseImageUrl.imgUrl)
    }, [responseImageUrl])

    useEffect(() => {
        setImgUrlMobile(responseImageUrlMobile.imgUrl)
    }, [responseImageUrlMobile])

    return (
        <section className="secondary-section post-item" id={item[0]}>
            <h2>{item[1].title}</h2>
            <p><span>Industry:</span> {item[1].industry}</p>
            <p><span>Technology Leveraged:</span>{item[1].tech}</p>
            <div className="container-buttons-inline">
                <a href="/" className="btn btn-primary" title="Visit Site" target="_blank" rel="noopener noreferrer">Visit Site</a>
                <a href="https://www.mokeez.com/blog/" className="btn btn-primary" title="Visit Live Blog" target="_blank" rel="noopener noreferrer">Visit Live Blog</a>
            </div>
            <a href="/" title="Visit Site" target="_blank" rel="noopener noreferrer">
                { responseImageUrl.isLoading && <div className="img-placeholder img-circle"></div> }
                { responseImageUrl.fetchError && <p style={{color: "red"}}>{`Error: ${responseImageUrl.fetchError}`}</p> }
                { !responseImageUrl.fetchError && !responseImageUrl.isLoading && 
                    <picture>
                        <source media="(max-width: 767px)" srcSet={imgUrlMobile}/>
                        <source media="(min-width: 768px)" srcSet={imgUrl}/>
                        <img src={imgUrl} alt="Mokeez Website" className="img-fluid"/>
                    </picture>
                }
            </a>
        </section>
    )
}

export default WebsitePost;