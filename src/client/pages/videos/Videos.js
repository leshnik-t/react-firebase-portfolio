import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { endPointVideos } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import VideosContainer from '../../components/videoscontainer/VideosContainer';

const Videos = () => {
    const [videoPosts, setVideoPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointVideos);

    useEffect(() => {
        setVideoPosts(processListData(response.data));
    }, [response.data]);
    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Video Ads - Editing and Effects" />
            <meta name="keywords" content="video editing, video effects, video ads, video covers" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Video Editing &amp; Effects - Lena M." />
            <meta property="og:description" content="Portfolio examples of Video Ads - Editing and Effects" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/video-editing-effects" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/video-editing-effects.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/video-editing-effects.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Video Editing &amp; Effects - Lena M." />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/video-editing-effects" />
            <meta name="twitter:description" content="Portfolio examples of Video Ads - Editing and Effects" />
            <meta name="twitter:title" content="Video Editing &amp; Effects - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/video-editing-effects.jpg" />
            <link rel="shortcut icon" href="favicon.ico"/>

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/video-editing-effects" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/video-editing-effects" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/video-editing-effects" />

            <title>Video Editing &amp; Effects - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && videoPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={videoPosts}
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
                                    {!response.fetchError && !response.isLoading && videoPosts &&
                                        <VideosContainer items={videoPosts} />
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

export default Videos;