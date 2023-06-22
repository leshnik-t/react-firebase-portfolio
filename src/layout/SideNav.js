import './side-nav.css';

const SideNav = ({ className, items }) => {
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
                                    <li className="nav-item">
                                        <a 
                                            href="#section1"
                                            data-target="section1"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            First heading
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            href="#section2"
                                            data-target="section2"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            Second heading
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            href="#section3"
                                            data-target="section3"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            Third heading
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            href="#section4"
                                            data-target="section4"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            Fourth heading
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            href="#section5"
                                            data-target="section5"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            Fifth heading
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a 
                                            href="#section6"
                                            data-target="section6"
                                            className="nav-link" 
                                            onClick={clickHandler}
                                        >
                                            Free Property Valuation Bansko
                                        </a>
                                    </li>
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