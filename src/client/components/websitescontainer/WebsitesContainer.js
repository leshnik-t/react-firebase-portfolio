import WebsitePost from '../websitepost/WebsitePost';

const WebsitesContainer = ({ items }) => {
    return (
        <div id="websites-container">
            <article>
                <h1>Web Design &amp; Frontend Development</h1>
                {items.map((item) =>
                    <WebsitePost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default WebsitesContainer;