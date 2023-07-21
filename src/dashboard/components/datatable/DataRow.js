import { Link } from 'react-router-dom';

const DataRow = ({ collectionName, item, handleDeleteClick }) => {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.orderName}</td>
            <td>{item.title}</td>
            <td>
                <div className="btn-container">
                    <Link 
                        to={`/dashboard/${collectionName}/${item.id}`} 
                        className="btn btn-primary"
                    >
                        View
                    </Link>
                    <Link 
                        to={`/dashboard/${collectionName}/${item.id}/edit`} 
                        className="btn btn-success"
                    >
                        Edit
                    </Link>
                    <button 
                        className="btn btn-danger"
                        onClick={() => handleDeleteClick(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default DataRow;