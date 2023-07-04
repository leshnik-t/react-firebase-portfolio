import './dashboard.css';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Dashboard;