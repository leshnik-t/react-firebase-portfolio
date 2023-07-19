import './video-post.css';

const VideoPost = ({ item }) => {
    const getVideoItemsList = (itemData) => {
        const videosArray = [];
        const videosMap = new Map();
        const videosArrayKeys = [];

        for (const [key, value] of Object.entries(item)) {
            if ( key.includes('video')) {
                const keyAsNumber = Number(key.match(/\d+/)[0]);
                videosMap.set(key, {id: key, ...value});
                videosArrayKeys.push(keyAsNumber);
            }
        }
        
        if (videosArrayKeys.length > 0) {
            videosArrayKeys.sort((a, b) => a - b);
            videosArrayKeys.forEach((videoId) => {
                videosArray.push(
                   <div className="video-post-item" key={videosMap.get(`video${videoId}`).id}>
                        <h4 className="text-left">
                            {videosMap.get(`video${videoId}`).text}
                        </h4>
                        <div className="container-iframe">
                            <iframe 
                                width="600" 
                                height="600" 
                                src={videosMap.get(`video${videoId}`).link}
                                title={videosMap.get(`video${videoId}`).text} 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                )
            })
        }

        return videosArray;
    }

    const videosList = getVideoItemsList(item);

    return (
        <section className="secondary-section post-item" id={item.orderName}>
            <h2>{item.title}</h2>
            {(videosList.length > 0) && videosList}
        </section>
    )
}

export default VideoPost;