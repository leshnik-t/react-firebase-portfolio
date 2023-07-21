import VideoFormGroup from '../../videoformgroup/VideoFormGroup';

const VideoPostForm = ({
    handleChangeInput, 
    handleSubmit, 
    item,
    isEditing,
    videos,
    handleAddVideo,
    handleDeleteVideo
}) => {
    const buttonText = isEditing ? 'Submit changes' : 'Add post';
    const video1text = item.video1 ? item.video1.text : item.video1 || '';
    const video1link = item.video1 ? item.video1.link : item.video1 || '';
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
                    htmlFor="video1text"
                    className="form-label"
                >
                    Video 1:
                </label>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="video1text" 
                        placeholder="Enter video1 title"
                        aria-required="true"
                        required
                        onChange={(e) => handleChangeInput(e)}
                        value={video1text}
                    />
                    <input 
                        type="text" 
                        className="form-control" 
                        id="video1link" 
                        placeholder="Enter video link 1"
                        aria-required="true"
                        required
                        onChange={(e) => handleChangeInput(e)}
                        value={video1link}
                        title="Video Link 1"
                    />
                </div>
            </div>
            <div className="mb-5">
                <div className="mb-3">  
                    <button 
                        type="button"
                        onClick={(e) => handleAddVideo(e)}
                        className="btn btn-success"
                    >
                        Add Video
                    </button>
                </div>
                {(videos.length > 0) && videos.map((video) => 
                <VideoFormGroup
                    key={video.id} 
                    id={video.id}
                    item={item} 
                    handleChangeInput={handleChangeInput}
                    handleDeleteVideo={handleDeleteVideo}
                />
            )}
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

export default VideoPostForm;