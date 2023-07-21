import './item-details.css';
import ItemDetailsElement from "./ItemDetailsElement";

const ItemDetails = ({ item }) => {
    const getItemLists = (item) => {
        const itemPropertiesArray = [];
        const btnsArray = [];
        const btnsMap = new Map();
        const btnsArrayKeys = [];
        const videosArray = [];
        const videosMap = new Map();
        const videosArrayKeys = [];
        
        for (const [key, value] of Object.entries(item)) {
            switch(true) {
                case (key.includes('btn')): {
                    const keyAsNumber = Number(key.match(/\d+/)[0]);
                    btnsMap.set(key, value.text);
                    btnsArrayKeys.push(keyAsNumber);
                    break;
                }
                case (key.includes('video')): {
                    const keyAsNumber = Number(key.match(/\d+/)[0]);
                    videosMap.set(key, value);
                    videosArrayKeys.push(keyAsNumber);
                    break;
                }
                case (key === 'img' ): break;
                default: {
                    let textInParagraphs = value;
                    if (key === 'text') {
                        const textValueArray = value.split('\n');
                        textInParagraphs = textValueArray.map((paragraph, index) => 
                            <p key={`paragraph${index}`}>{paragraph}</p>
                        )
                    }
                    itemPropertiesArray.push(
                        <ItemDetailsElement 
                            key={key} 
                            property={key} 
                            value={textInParagraphs} 
                        />
                    )
                    break;
                }
            }
        }

        if (btnsArrayKeys.length > 0) {
            btnsArrayKeys.sort((a, b) => a - b);
            btnsArrayKeys.forEach((btnId) => {
                btnsArray.push(
                    <div className="mb-3" key={`btn${btnId}`}>
                        <button 
                            type="button"
                            className="btn btn-primary"
                        >
                            {btnsMap.get(`btn${btnId}`)}
                        </button>
                    </div>
                )
            })
        }

        if (videosArrayKeys.length > 0) {
            videosArrayKeys.sort((a, b) => a - b);
            videosArrayKeys.forEach((videoId) => {
                videosArray.push(
                    <ItemDetailsElement
                        key={`video${videoId}`}
                        property={videosMap.get(`video${videoId}`).text} 
                        value={videosMap.get(`video${videoId}`).link} 
                    />
                )
            })
        }
       
        return [itemPropertiesArray, btnsArray, videosArray];
    }

    const [itemPropertiesArray, btnsArray, videosArray] = getItemLists(item);

    return (
        <div className="right">
            {itemPropertiesArray.length > 0 && itemPropertiesArray}
            {btnsArray.length > 0 && btnsArray}
            {videosArray.length > 0 && videosArray}
        </div>
    )
}

export default ItemDetails;