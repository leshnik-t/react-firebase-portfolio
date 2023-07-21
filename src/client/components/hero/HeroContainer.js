import './hero-container.css';
import SocialLinks from '../sociallinks/SocialLinks';
import { Link } from 'react-router-dom';

const HeroContainer = () => {
    return (
        <div className="hero-container">
            <div className="row">
                <div className="col col-lg-6 col-xl-6">
                    <div className="hero-content">
                        <div className="hero-header">
                            <p className="hero-text-lg text-purple">Lena M.</p>
                            <h1 className="hero-heading">
                                Web Designer &amp;<br/> Frontend Developer 
                            </h1>
                            <p>... self driven and cheerful person, realistic optimist!</p>
                        </div>
                        <div className="hero-links">
                            <SocialLinks />
                            <Link
                                to="/contact"
                                className="btn btn-primary nav-link-small ms-2"
                                title="Send email"
                                role="button"
                            >
                                Send email
                            </Link>
                        </div>
                        <div className="hero-image-tablet-mobile"></div>
                        <div className="hero-description">
                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-6">
                                <p><strong>Languages:</strong> JavaScript, HTML, CSS</p>
                                    <p><strong>Frameworks:</strong> ReactJS</p>
                                    <p><strong>State Management:</strong> Context, Firebase Store</p>
                                    <p><strong>HTTP Client:</strong> fetch API, Axios</p>
                                    <p><strong>Forms:</strong> React Forms</p>
                                    <p><strong>Unit Testing:</strong> Jest</p>
                                    <p><strong>Style:</strong> SASS/SCSS</p>
                                </div>
                                <div className="col col-lg-6">
                                    <p><strong>CSS Frameworks:</strong> Bootstrap 5</p>
                                    <p><strong>Bundlers:</strong> Webpack</p>
                                    <p><strong>Package management:</strong> npm</p>
                                    <p><strong>Code Style:</strong> ESLint, Prettier</p>
                                    <p><strong>Authentication:</strong> Firebase</p>
                                    <p><strong>Development tools:</strong> VSC</p>
                                    <p><strong>SEO:</strong> react-helmet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    )
}

export default HeroContainer;