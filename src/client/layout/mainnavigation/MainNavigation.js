import './main-navigation.css';
import mainMenuLinks from '../../config/mainMenuLinks';
import { NavLink, Link } from 'react-router-dom';

const MainNavigation = () => {
    const clickHandler = (e) => {
        const menuToggle = document.getElementById('navbarSupportedContent')
        menuToggle.classList.remove('show');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link
                    to="/contact"
                    className="btn btn-primary nav-link-small"
                    title="Send email"
                    role="button"
                >
                    Send email
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        {mainMenuLinks.map((item) => 
                            <li className="nav-item" key={item.id}>
                                <NavLink 
                                    to={item.path} 
                                    className="nav-link" 
                                    title={item.title}
                                    onClick={clickHandler}
                                >
                                    {item.title}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNavigation;