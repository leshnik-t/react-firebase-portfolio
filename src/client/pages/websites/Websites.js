import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { endPointWebsites } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import WebsitesContainer from '../../components/websitescontainer/WebsitesContainer';

const Websites = () => {
    const [websitePosts, setWebsitePosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointWebsites);

    useEffect(() => {
        setWebsitePosts(processListData(response.data));
    }, [response.data]);

    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Website Design and Frontend Development - HTML5, CSS3, Bootstrap 3, jQuery" />
            <meta name="keywords" content="web design, frontend development, HTML, HTML5, CSS3, Bootstrap 3, jQuery" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Web Design and Frontend Development - Lena M." />
            <meta property="og:description" content="Portfolio examples of Website Design and Frontend Development - HTML5, CSS3, Bootstrap 3, jQuery" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/web-design-and-frontend-development" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-design-frontend-development.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-design-frontend-development.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Web Design and Frontend Development - Lena M." />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/web-design-and-frontend-development" />
            <meta name="twitter:description" content="Portfolio examples of Website Design and Frontend Development - HTML5, CSS3, Bootstrap 3, jQuery" />
            <meta name="twitter:title" content="Web Design and Frontend Development - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/web-design-frontend-development.jpg" />
           
            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/web-design-and-frontend-development" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/web-design-and-frontend-development" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/web-design-and-frontend-development" />

            <title>Web Design and Frontend Development - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && websitePosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={websitePosts}
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
                                    {!response.fetchError && !response.isLoading && websitePosts &&
                                        <WebsitesContainer items={websitePosts} />
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

export default Websites;