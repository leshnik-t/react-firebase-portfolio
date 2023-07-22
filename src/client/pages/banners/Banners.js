import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { endPointBanners } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import BannersContainer from '../../components/bannerscontainer/BannersContainer';

const Banners = () => {
    const [bannerPosts, setBannerPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointBanners);

    useEffect(() => {
        setBannerPosts(processListData(response.data));
    }, [response.data]);

    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Web Banners" />
            <meta name="keywords" content="web banners, Google Ads static banners, Google Ads Dynamic Banners, Facebook Ads, Facebook Covers, Facebook Carousel Ads" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Web Banners - Lena M." />
            <meta property="og:description" content="Portfolio examples of Web Banners" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/web-banners" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-banners.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-banners.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Web Banners - Lena M." />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/web-banners" />
            <meta name="twitter:description" content="Portfolio examples of Web Banners" />
            <meta name="twitter:title" content="Web Banners - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-banners.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/web-banners" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/web-banners" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/web-banners" />

            <title>Web Banners - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && bannerPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={bannerPosts}
                            />
                        }
                    </div>
                    <div className="col col-main">
                        <main>
                            <div className="row">
                                <div className="col">
                                    {response.isLoading && <p>Loading Items...</p>}
                                    {response.fetchError && 
                                        <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                                    }
                                    {!response.fetchError && !response.isLoading && bannerPosts &&
                                        <BannersContainer items={bannerPosts} />
                                    }
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </Wrapper>
        </>
    )
}

export default Banners;