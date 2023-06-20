import Wrapper from '../common/Wrapper';
import SocialLinks from '../components/SocialLinks';
import './footer.css';

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <Wrapper>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col text-center">
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <p>&copy; {today.getFullYear()} All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer;