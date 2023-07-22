import '../sticky-navigation-page.css';
import '../simple-page.css';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { endPointEmails } from '../../config/endPoints';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import Wrapper from '../../components/wrapper/Wrapper';
import SideNav from '../../layout/sidenav/SideNav';
import EmailsContainer from '../../components/emailscontainer/EmailsContainer';

const Emails = () => {
    const [emailPosts, setEmailPosts] = useState(null);
    const response = useFetchRealtimeFirebase(endPointEmails);

    useEffect(() => {
        setEmailPosts(processListData(response.data));
    }, [response.data]);

    return (
        <>
        <Helmet>
            <meta name="description" content="Portfolio examples of Email/Newsletter Design and Development" />
            <meta name="keywords" content="email design, email templates, newsletter design, newsletter templates, xHTML, inline CSS" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Email/Newsletter Design &amp; Development - Lena M." />
            <meta property="og:description" content="Portfolio examples of Email/Newsletter Design and Development" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/email-newsletter-design-development" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/email-newsletter-design-development.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/email-newsletter-design-development.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Email/Newsletter Design &amp; Development - Lena M." />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/email-newsletter-design-development" />
            <meta name="twitter:description" content="Portfolio examples of Email/Newsletter Design and Development" />
            <meta name="twitter:title" content="Email/Newsletter Design &amp; Development - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/email-newsletter-design-development.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/email-newsletter-design-development" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/email-newsletter-design-development" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/email-newsletter-design-development" />

            <title>Email/Newsletter Design &amp; Development - Lena M.</title>
        </Helmet>
        <Wrapper>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sticky">
                        {response.isLoading && <p>Loading Items...</p>}
                        {response.fetchError && 
                            <p style={{color: "red"}}>{`Error: ${response.fetchError}`}</p>
                        }
                        {!response.fetchError && !response.isLoading && emailPosts &&
                            <SideNav 
                                className="sticky-navigation-container"
                                items={emailPosts}
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
                                    {!response.fetchError && !response.isLoading && emailPosts &&
                                        <EmailsContainer items={emailPosts} />
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

export default Emails;