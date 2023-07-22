import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <>
        <Helmet>
            <meta name="description" content="Contact details" />
            <meta name="keywords" content="contact" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Contact - Lena M." />
            <meta property="og:description" content="Contact details" />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Contact - Lena M." />
            
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <meta name="twitter:description" content="Contact details" />
            <meta name="twitter:title" content="Contact - Lena M." />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio/contact" />

            <title>Contact - Lena M.</title>
        </Helmet>
        <main>
            <h1>Contact</h1>
        </main>
        </>
    )
}

export default Contact;