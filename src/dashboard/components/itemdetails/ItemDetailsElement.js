const ItemDetailsElement = ({ property, value }) => {
    return (
        <div className="details-item">
            <div className="item-key">{property}</div>
            <div className="item-value">{value}</div>
        </div>
    )
}

export default ItemDetailsElement;