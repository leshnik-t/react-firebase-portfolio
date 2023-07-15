const ReferenceRatingPostForm = ({ 
    handleChangeInput, 
    handleSubmit, 
    item,
    percentage, 
    isEditing 
}) => {
    const buttonText = isEditing ? 'Submit changes' : 'Add post';
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label 
                    htmlFor="orderName"
                    className="form-label"
                >
                    Post Order name:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="orderName" 
                    placeholder="Enter unique post's name"
                    aria-required="true"
                    aria-labelledby="orderNameHelpBlock"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={item.orderName || ''}
                />
                <div id="orderNameHelpBlock" className="form-text">
                    This name will be used for ordering posts (asc/desc) on the client side.
                </div>
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="title"
                    className="form-label"
                >
                    Title:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Enter title"
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={item.title || ''}
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="text"
                    className="form-label"
                >
                    Text:
                </label>
                <textarea 
                    className="form-control" 
                    id="text" 
                    rows="8"
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={item.text || ''}
                >
                </textarea>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
            >
                {buttonText}
            </button>
        </form>
    )
}

export default ReferenceRatingPostForm;