import './side-nav.css';

const SideNav = ({ className }) => {
    const clickHandler = () => {
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
                            <ul className="navbar-nav justify-content-end flex-grow-1">
                                <li className="nav-item">
                                    <a href="#scrollspyHeading1" data-target="sec1" className="nav-link"  onClick={clickHandler}>Mokeez - Digital Marketing Agency</a>
                                </li>
                                <li className="nav-item"><a href="#scrollspyHeading2" data-target="sec2" className="nav-link" onClick={clickHandler}>LP Free Adwords Audit</a></li>
                                <li className="nav-item"><a href="#scrollspyHeading3" data-target="sec3" className="nav-link" onClick={clickHandler}>LP Healthcare</a></li>
                                <li className="nav-item"><a href="#scrollspyHeading4" data-target="sec4" className="nav-link" onClick={clickHandler}>Optimus 10</a></li>
                                <li className="nav-item"><a href="#scrollspyHeading5" data-target="sec5" className="nav-link" onClick={clickHandler}>Bizzare Aqua</a></li>
                                <li className="nav-item"><a href="#sec6" data-target="sec6" className="nav-link">Free Property Valuation Bansko</a></li>
                                <li className="nav-item"><a href="#sec7" data-target="sec7" className="nav-link">Tender Scout</a></li>
                                <li className="nav-item"><a href="#sec1" data-target="sec1" className="nav-link">Mokeez - Digital Marketing Agency</a></li>
                                <li className="nav-item"><a href="#sec2" data-target="sec2" className="nav-link">LP Free Adwords Audit</a></li>
                                <li className="nav-item"><a href="#sec3" data-target="sec3" className="nav-link">LP Healthcare</a></li>
                                <li className="nav-item"><a href="#sec4" data-target="sec4" className="nav-link">Optimus 10</a></li>
                                <li className="nav-item"><a href="#sec5" data-target="sec5" className="nav-link">Bizzare Aqua</a></li>
                                <li className="nav-item"><a href="#sec6" data-target="sec6" className="nav-link">Free Property Valuation Bansko</a></li>
                                <li className="nav-item"><a href="#sec7" data-target="sec7" className="nav-link">Tender Scout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </nav>
        </aside>
    )
}

export default SideNav;