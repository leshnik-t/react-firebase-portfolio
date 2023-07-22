import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { endPointLogos } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import LogosContainer from '../../components/logoscontainer/LogosContainer';

const Logos = () => {
    const [logoPosts, setLogoPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointLogos);

    useEffect(() => {
        setLogoPosts(processListData(response.data));
    }, [response.data]);

    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Logo Design" />
            <meta name="keywords" content="logo design" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Logo Design - Lena M." />
            <meta property="og:description" content="Portfolio examples of Logo Design" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/logo-design" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/logo-design.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/logo-design.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Logo Design - Lena M." />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/logo-design" />
            <meta name="twitter:description" content="Portfolio examples of Logo Design" />
            <meta name="twitter:title" content="Logo Design - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/logo-design.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/logo-design" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/logo-design" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/logo-design" />

            <title>Logo Design - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && logoPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={logoPosts}
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
                                    {!response.fetchError && !response.isLoading && logoPosts &&
                                        <LogosContainer items={logoPosts} />
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

export default Logos;