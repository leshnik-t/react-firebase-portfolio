import './widget.css';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

const Widget = ({ data }) => {
    return (
        <div className="widget">
            <FaBookmark className="icon"/>
            <h2>{data.title}</h2>
            <Link to={data.path} className="btn btn-primary">See all posts</Link>
        </div>
    )
}

export default Widget;