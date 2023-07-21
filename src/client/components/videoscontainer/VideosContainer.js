import VideoPost from '../videopost/VideoPost';

const VideosContainer = ({ items }) => {
    return (
        <div id="videos-container">
            <article>
                <h1>Video Editing &amp; Effects</h1>
                {(items.length > 0) && items.map((item) =>
                    <VideoPost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default VideosContainer;