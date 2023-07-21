const VideoFormGroup = ({ 
    id, 
    item,
    handleChangeInput, 
    handleDeleteVideo 
}) => {
    const valueText = item[`video${id}`] ? item[`video${id}`].text : item[`video${id}`] || '';
    const valueLink = item[`video${id}`] ? item[`video${id}`].link : item[`video${id}`] || '';

    return (
        <div className="mb-3">
            <label 
                htmlFor={`video${id}text`}
                className="form-label"
            >
                Video {id}:
            </label>
            <div className="input-group">
                <input
                    type="text" 
                    className="form-control" 
                    id={`video${id}text`} 
                    placeholder={`Enter video${id} text`}
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={valueText}
                />
                <input
                    type="text" 
                    className="form-control" 
                    id={`video${id}link`} 
                    placeholder={`Enter video link ${id}`}
                    aria-required="true"
                    required
                    onChange={(e) => handleChangeInput(e)}
                    value={valueLink}
                    title={`Video Link ${id}`}
                />
                <button 
                    type="button" 
                    onClick={(e) => handleDeleteVideo(e)}
                    className="btn btn-danger"
                    id={id}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default VideoFormGroup;