import './list.css';
import { Link } from 'react-router-dom';
import Datatable from '../../components/datatable/Datatable';

const List = ({ collectionName, listTitle, addNewPath }) => {
    return (
        <main className="list">
            <article>
                <h1>{listTitle}</h1>
                <Link to={addNewPath} className="btn btn-primary">Add new post</Link>
                <Datatable collectionName={collectionName}/>
            </article>
        </main>
    )
}

export default List;