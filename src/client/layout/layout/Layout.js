import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollToTop from "../../../common/ScrollToTop";

const Layout = () => {
    return (
        <div className="App">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;