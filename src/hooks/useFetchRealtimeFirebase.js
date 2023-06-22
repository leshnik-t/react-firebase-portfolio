import { useState, useEffect } from 'react';

const useFetchRealtimeFirebase = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError]  = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw Error('Did not receive data');

                const listItems = await response.json();
                const result = [];
                for (const i in listItems) {
                    result.push([i, listItems[i]]);
                }

                setData(result);
                setFetchError(null);

            } catch (err) {
                    setFetchError(err.message);
                    setData([]);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchData(dataUrl);
        
    }, [dataUrl]);

    return { data, fetchError, isLoading };
}

export default useFetchRealtimeFirebase;