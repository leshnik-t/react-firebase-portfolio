import './header.css';
import Wrapper from '../common/Wrapper';
import MainNavigation from '../components/MainNavigation';

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