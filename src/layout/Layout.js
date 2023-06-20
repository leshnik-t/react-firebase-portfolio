import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from "../common/ScrollToTop";

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