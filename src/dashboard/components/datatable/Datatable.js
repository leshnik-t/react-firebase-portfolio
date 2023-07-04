import './datatable.css';
import { Link } from 'react-router-dom';

const Datatable = ({ collectionName }) => {
    return (
        <div className="table-responsive mt-3 datatable">
            <table className="table table-hover align-middle">
                <caption>List of posts</caption>
                <thead className="table-light">
                    <tr>
                        <th scope="col" className="col-2">#</th>
                        <th scope="col" className="col-6">Post name</th>
                        <th scope="col" className="col-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">website id from the database</th>
                        <td>website1</td>
                        <td>
                            <div className="btn-container">
                                <Link to="/dashboard/websites/1" className="btn btn-primary">View</Link>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Datatable;