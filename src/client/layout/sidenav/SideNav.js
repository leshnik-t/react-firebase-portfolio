import './side-nav.css';
import { Link } from 'react-router-dom';

const SideNav = ({ className, items }) => {
    const navItemsList = items.map((item) => [item.orderName, item.title]);
    const clickHandler = (e) => {
        e.preventDefault();
        const sectionTarget = document.getElementById(e.target.getAttribute("data-target")).offsetTop;
        console.log(sectionTarget);
        window.scroll(0, sectionTarget);

        const offsetSideBar = document.getElementById('offcanvasNavbar');
        if (!offsetSideBar.classList.contains('show')) return;

        const btnClose = document.getElementsByClassName('btn-close')[0];
        btnClose.click();
    }
    return (
        <aside className={className}>
            <h2 className="d-none d-lg-block">Jump to:</h2>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        Jump to &raquo;
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Jump to:</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <nav id="navbarNav" className="navbar navbar-light">
                                <ul className="nav navbar-nav justify-content-end flex-grow-1">
                                    {navItemsList.length > 0 && navItemsList.map((navLink) => (
                                        <li className="nav-item" key={`#${navLink[0]}`}>
                                            <Link
                                                href={`#${navLink[0]}`}
                                                data-target={navLink[0]}
                                                className="nav-link" 
                                                onClick={clickHandler}
                                            >
                                                {navLink[1]}
                                            </Link>
                                        </li>
                                        )
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                </nav>
        </aside>
    )
}

export default SideNav;