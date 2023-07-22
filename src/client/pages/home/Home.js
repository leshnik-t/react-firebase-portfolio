import { Helmet } from 'react-helmet';
import SectionCategories from '../../components/section/SectionCategories';
import SectionHero from '../../components/section/SectionHero';
import SectionLogos from '../../components/section/SectionLogos';
import SectionReferences from '../../components/section/SectionReferences';

const Home = () => {
    return (
        <>
        <Helmet>
            <meta name="description" content="Specialties: Website Design and Frontend Development, Javascript Small Games, Email Design, Video Editing, Web Banners and Logo Design." />
            <meta name="keywords" content="web design, frontend development, javascript, email design, newsletter design, video editing, web banners, logo design" />

            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Lena M. - Web Designer and Frontend Developer" />
            <meta property="og:description" content="Specialties: Website Design and Frontend Development, Javascript Small Games, Email Design, Video Editing, Web Banners and Logo Design." />
            <meta property="og:url" content="https://leshnik-t.github.io/react-firebase-portfolio" />
            <meta property="og:site_name" content="Lena M." />
            <meta property="og:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:secure_url" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Lena M. - Web Designer and Frontend Developer" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://leshnik-t.github.io/react-firebase-portfolio" />
            <meta name="twitter:description" content="Specialties: Website Design and Frontend Development, Javascript Small Games, Email Design, Video Editing, Web Banners and Logo Design." />
            <meta name="twitter:title" content="Lena M. - Web Designer and Frontend Developer" />
            <meta name="twitter:image" content="https://leshnik-t.github.io/react-firebase-portfolio/ogimages/Lena-web-design-frontend-developer.jpg" />

            <link rel="alternate" hreflang="x-default" href="https://leshnik-t.github.io/react-firebase-portfolio" />
            <link rel="alternate" hreflang="en" href="https://leshnik-t.github.io/react-firebase-portfolio" />
            <link rel="canonical" href="https://leshnik-t.github.io/react-firebase-portfolio" />

            <title>React Firebase Portfolio - Lena M.</title>
        </Helmet>
        <main>
            <SectionHero className="home-section"/>
            <SectionLogos className="home-section"/>
            <SectionCategories className="home-section"/>
            <SectionReferences className="home-section"/>
        </main>
        </>
    )
}

export default Home;