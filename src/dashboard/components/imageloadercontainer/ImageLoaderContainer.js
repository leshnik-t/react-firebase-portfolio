import NoImage from '../../assets/images/no-image-icon-0.jpg';
import ImageLoader from '../imageloader/ImageLoader';

const ImageLoaderContainer = ({ item, cssImagePlaceholder }) => {
    
    const isItemHasImageUrl = (item.img && item.img.url !== '') ? true : false;
    return (
        <div className="left">
            {isItemHasImageUrl &&
                <>
                    <p>{item.img.url}</p>
                    <ImageLoader 
                        url={item.img.url} 
                        alt={item.img.alt} 
                        cssImagePlaceholder={cssImagePlaceholder}
                    />
                </>
            }
            {!isItemHasImageUrl &&
                <img src={NoImage} alt="no data" className="img-fluid"/>
            }
        </div>
    )
}

export default ImageLoaderContainer;