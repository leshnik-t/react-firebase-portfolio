const ButtonFormGroup = ({ 
    id, 
    item,
    handleChangeInput, 
    handleDeleteButton 
}) => {
    const valueText = item[`btn${id}`] ? item[`btn${id}`].text : item[`btn${id}`] || '';
    const valueLink = item[`btn${id}`] ? item[`btn${id}`].link : item[`btn${id}`] || '';

    return (
        <div className="mb-3">
            <label 
                htmlFor={`btn${id}text`}
                className="form-label"
            >
                Button {id}:
            </label>
            <div className="input-group">
                <input
                    type="text" 
                    className="form-control" 
                    id={`btn${id}text`} 
                    placeholder={`Enter btn${id} text`}
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={valueText}
                />
                <input
                    type="text" 
                    className="form-control" 
                    id={`btn${id}link`} 
                    placeholder={`Enter button link ${id}`}
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={valueLink}
                    title={`Button Link ${id}`}
                />
                <button 
                    type="button" 
                    onClick={(e) => handleDeleteButton(e)}
                    className="btn btn-danger"
                    id={id}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default ButtonFormGroup;