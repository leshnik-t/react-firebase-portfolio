import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { endPointJavascript } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import JavascriptContainer from '../../components/javascriptcontainer/JavascriptContainer';

const JavaScript = () => {
    const [javascriptPosts, setJavascriptPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointJavascript);

    useEffect(() => {
        setJavascriptPosts(processListData(response.data));
    }, [response.data]);

    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Javascript Small Games" />
            <meta name="keywords" content="javascript, small games, javascript card game, javascript chat" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="JavaScript Small Games - Lena M." />
            <meta property="og:description" content="Portfolio examples of Javascript Small Games" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/javascript-small-games" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/javascript-small-games.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/javascript-small-games.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="JavaScript Small Games - Lena M." />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/javascript-small-games" />
            <meta name="twitter:description" content="Portfolio examples of Javascript Small Games" />
            <meta name="twitter:title" content="JavaScript Small Games - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/javascript-small-games.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/javascript-small-games" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/javascript-small-games" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/javascript-small-games" />

            <title>JavaScript Small Games - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && javascriptPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={javascriptPosts}
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
                                    {!response.fetchError && !response.isLoading && javascriptPosts &&
                                        <JavascriptContainer items={javascriptPosts} />
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

export default JavaScript;