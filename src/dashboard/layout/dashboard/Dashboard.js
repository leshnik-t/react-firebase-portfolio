import './dashboard.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import ScrollToTop from "../../../helpers/ScrollToTop";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <ScrollToTop />
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Dashboard;