import './datatable.css';
import { useState, useEffect } from 'react';
import { databaseURL } from '../../../config/firebase';
import useFetchRealtimeFirebase from '../../../hooks/useFetchRealtimeFirebase';
import processListData from '../../../helpers/processListData';
import { useAuth } from '../../../context/AuthContext';
import apiRequest from '../../helpers/apiRequest';
import DataRow from './DataRow';

const Datatable = ({ collectionName }) => {
    const { currentUser } = useAuth();
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [message, setMessage] = useState('');

    const ID_TOKEN = currentUser.stsTokenManager.accessToken;
    const API_URL = `${databaseURL}/${collectionName}`;

    const response = useFetchRealtimeFirebase(`${API_URL}.json`);

    useEffect(() => {
        setData(processListData(response.data));
    }, [response.data]);

    const deleteItem = async (id, endPointParent, token) => {
        const newData = data.filter((item) => item.id !== id);

        const deleteOptions = {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
        };
        const reqUrl = endPointParent + '/' + id + '.json?auth=' + token;
        const result = await apiRequest(reqUrl, deleteOptions);

        if (result) setFetchError("You don't have permissions to delete!")
        else {
            setData(newData);
            setFetchError(null);
            setMessage('The item is successfully deleted!');
            setTimeout(() => {
                setMessage('');
            }, 2000)
        }
    }

    const handleDeleteClick = (id) => {
        const choice = window.confirm(
            "Are you sure you want to delete the post?"
        )
        if (choice) {
            deleteItem(id, API_URL, ID_TOKEN);
        }
    }

    return (
        <>
            <div className="alert-container">
                {response.isLoading && 
                    <p className="alert alert-warning">Loading Items...</p>
                }
                {response.fetchError && 
                    <p className="alert alert-danger">{`Error: ${response.fetchError}`}</p>
                }
            </div>
            {!response.fetchError && !response.isLoading &&
                <div className="table-responsive mt-3 datatable">
                    <table className="table table-hover align-middle">
                        <caption>List of posts</caption>
                        <thead className="table-light">
                            <tr>
                                <th scope="col" className="col-2">#</th>
                                <th scope="col" className="col-2">Post name</th>
                                <th scope="col" className="col-4">Post title</th>
                                <th scope="col" className="col-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => 
                                <DataRow 
                                    key={item.id}
                                    collectionName={collectionName}
                                    item={item} 
                                    handleDeleteClick={handleDeleteClick}
                                />
                            )}
                        </tbody>
                    </table>
                </div>
            }
            <div className="alert-container">
                {fetchError && 
                    <p className="alert alert-danger">{fetchError}</p>
                }
                {message && 
                    <p className="alert alert-warning">{message}</p>
                }
            </div>
        </>
    )
}

export default Datatable;