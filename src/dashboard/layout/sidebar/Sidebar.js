import './sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { FaLaptopCode, FaStar, FaRegImage } from 'react-icons/fa';

const Sidebar = () => {
    const { currentUser, logout } = useAuth();
    const [ error, setError] = useState(null);

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            const response = await logout();
            if (response === undefined) throw Error(error);

        } catch(err) {
            setError(err.message);
            console.log(err.message);
        }
    }

    return (
        <aside className="sidebar">
            <nav>
                <section className="top">
                    <Link to="/dashboard">
                        <span className="logo">Portfolio Admin</span>
                    </Link>
                </section>
                <section className="user">
                    <h3>Signed User</h3>
                    <p>{currentUser.email}</p>
                </section>
                <section className="center">
                    <div>
                        <h3 className="title">Main</h3>
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    <FaLaptopCode className="icon"/>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">References on homepage</h3>
                        <ul>
                            <li>
                                <Link to="/dashboard/references-image">
                                    <FaRegImage className="icon"/>
                                    <span>With image</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/references-rating">
                                    <FaStar className="icon"/>
                                    <span>With rating</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">Pages</h3>
                        <ul>
                            <li>
                                <Link to="/dashboard/websites">
                                    <FaLaptopCode className="icon"/>
                                    <span>Websites</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/javascript">
                                    <FaLaptopCode className="icon"/>
                                    <span>JavaScript</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/emails">
                                    <FaLaptopCode className="icon"/>
                                    <span>Emails</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/videos">
                                    <FaLaptopCode className="icon"/>
                                    <span>Videos</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/banners">
                                    <FaLaptopCode className="icon"/>
                                    <span>Banners</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/logos">
                                    <FaLaptopCode className="icon"/>
                                    <span>Logos</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="bottom">
                <h3 className="title">User</h3>
                    <ul>
                        <li>
                            {error && <p className="alert alert-danger">{error}</p>}
                            <Link to="/" onClick={(e) => handleLogout(e)}>
                                <FaLaptopCode className="icon"/>
                                <span>Log Out</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </nav>
        </aside>
    )
}

export default Sidebar;