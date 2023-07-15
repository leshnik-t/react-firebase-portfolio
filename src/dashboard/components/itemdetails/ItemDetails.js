import './item-details.css';
// import ImageLoader from '../imageloader/ImageLoader';
// import NoImage from '../../assets/images/no-image-icon-0.jpg';
import ItemDetailsElement from "./ItemDetailsElement";
import ImageLoaderContainer from '../imageloadercontainer/ImageLoaderContainer';


const ItemDetails = ({ item }) => {
    const itemList = (item) => {
        const resultArray = [];
        for (const [key, value] of Object.entries(item)) {
            if (key !== 'img') {
                let textInParagraphs = value;
                if (key === 'text') {
                    const textValueArray = value.split('\n');
                    textInParagraphs = textValueArray.map((paragraph, index) => 
                        <p key={`paragraph${index}`}>{paragraph}</p>
                    )
                }
                resultArray.push(
                    <ItemDetailsElement 
                        key={key} 
                        property={key} 
                        value={textInParagraphs} 
                    />
                )
            } 
        }

        return resultArray;
    }

    return (
        <div className="details">
            <ImageLoaderContainer item={item} />
            <div className="right">
                {itemList(item)}
            </div>
        </div>
    )
}

export default ItemDetails;