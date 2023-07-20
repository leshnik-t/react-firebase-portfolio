import ButtonFormGroup from '../../buttonformgroup/ButtonFormGroup';

const WebsitePostForm = ({ 
    handleChangeInput, 
    handleSubmit, 
    item,
    percentage, 
    isEditing,
    buttons,
    handleAddButton,
    handleDeleteButton
}) => {
    const buttonText = isEditing ? 'Submit changes' : 'Add post';
    const altValue = item.img ? item.img.alt : item.img || '';
    const btn1text = item.btn1 ? item.btn1.text : item.btn1 || '';
    const btn1link = item.btn1 ? item.btn1.link : item.btn1 || '';
    
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
        <div className="mb-3">
            <label 
                htmlFor="industry"
                className="form-label"
            >
                Industry:
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="industry" 
                placeholder="Enter industry"
                aria-required="true"
                required
                onChange={(e) => handleChangeInput(e)}
                value={item.industry || ''}
            />
        </div>
        <div className="mb-3">
            <label 
                htmlFor="technology"
                className="form-label"
            >
                Technology Leveraged:
            </label>
            <input 
                type="text" 
                className="form-control" 
                id="technology" 
                placeholder="Enter technology"
                aria-required="true"
                required
                onChange={(e) => handleChangeInput(e)}
                value={item.technology || ''}
            />
        </div>
        <div className="mb-3">
            <label 
                htmlFor="btn1text"
                className="form-label"
            >
                Button 1:
            </label>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="btn1text" 
                    placeholder="Enter btn1 text"
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={btn1text}
                />
                <input 
                    type="text" 
                    className="form-control" 
                    id="btn1link" 
                    placeholder="Enter button link 1"
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={btn1link}
                    title="Button Link 1"
                />
            </div>
        </div>
        <div className="mb-5">
            <div className="mb-3">  
                <button 
                    type="button"
                    onClick={(e) => handleAddButton(e)}
                    className="btn btn-success"
                >
                    Add Button
                </button>
            </div>
            {(buttons.length > 0) && buttons.map((button) => 
                <ButtonFormGroup
                    key={button.id} 
                    id={button.id}
                    item={item} 
                    handleChangeInput={handleChangeInput}
                    handleDeleteButton={handleDeleteButton}
                />
            )}
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

export default WebsitePostForm;