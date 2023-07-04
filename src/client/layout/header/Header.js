import './header.css';
import Wrapper from '../../components/wrapper/Wrapper';
import MainNavigation from '../mainnavigation/MainNavigation';

const Header = () => {
    return (
        <header className="fixed-top">
            <Wrapper>
                <MainNavigation />
            </Wrapper>   
        </header>
    )
}

export default Header;