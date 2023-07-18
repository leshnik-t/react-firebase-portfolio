import './item-details.css';
import ItemDetailsElement from "./ItemDetailsElement";

const ItemDetails = ({ item }) => {
    const getItemLists = (item) => {
        const itemPropertiesArray = [];
        const btnsArray = [];
        const btnsMap = new Map();
        const btnsArrayKeys = [];
        for (const [key, value] of Object.entries(item)) {
            if (key !== 'img' && !key.includes('btn')) {
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
            }
            if (key.includes('btn')) {
                const keyAsNumber = Number(key.match(/\d+/)[0]);
                btnsMap.set(key, value.text);
                btnsArrayKeys.push(keyAsNumber);
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

        return [itemPropertiesArray, btnsArray];
    }

    const [itemPropertiesArray, btnsArray] = getItemLists(item);

    return (
        <div className="right">
            {itemPropertiesArray.length > 0 && itemPropertiesArray}
            {btnsArray.length > 0 && btnsArray}
        </div>
    )
}

export default ItemDetails;