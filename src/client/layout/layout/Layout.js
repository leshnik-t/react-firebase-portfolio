import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollToTop from "../../../helpers/ScrollToTop";

const Layout = () => {
    return (
        <div className="app">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;