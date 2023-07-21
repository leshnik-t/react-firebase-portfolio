import BannerPost from '../bannerpost/BannerPost';

const BannersContainer = ({ items }) => {
    return (
        <div id="banners-container">
            <article>
                <h1>Web Banners</h1>
                {(items.length > 0) && items.map((item) =>
                    <BannerPost item={item} key={item.id}/>
                )}
            </article>
        </div>
    )
}

export default BannersContainer;