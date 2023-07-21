const LogoPostForm = ({
    handleChangeInput, 
    handleSubmit, 
    item,
    percentage, 
    isEditing
}) => {
    const buttonText = isEditing ? 'Submit changes' : 'Add post';
    const altValue = item.img ? item.img.alt : item.img || '';
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label 
                    htmlFor="file"
                    className="form-label"
                >
                    Image file:
                </label>
                <input 
                    type="file" 
                    className="form-control" 
                    id="file" 
                    placeholder="Choose an image"
                    onChange={(e) => handleChangeInput(e)}
                />
            </div>
            <div className="mb-3">
                <label 
                    htmlFor="alt"
                    className="form-label"
                >
                    Alt text:
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="alt" 
                    placeholder="Enter alt of the image"
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={altValue}
                />
            </div>
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
            <button 
                disabled={percentage !== null} 
                type="submit" 
                className="btn btn-primary"
            >
                {buttonText}
            </button>
        </form>
    )
}

export default LogoPostForm;