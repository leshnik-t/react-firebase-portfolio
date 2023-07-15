import { useState, useEffect, useRef } from 'react';

const useFetchRealtimeFirebase = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError]  = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const mounted = useRef(true);

    useEffect(() => {
        const fetchData = async (url) => {
            mounted.current = true;
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) throw Error('Did not receive data');

                const json = await response.json();
                
                if (mounted.current) {
                    setData(json);
                    setFetchError(null); 
                }
            } catch (err) {
                if (mounted.current) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                if (mounted.current) {
                    setIsLoading(false);
                }
            }
        }
        
        fetchData(dataUrl);

        return () => mounted.current = false;
    }, [dataUrl]);

    return { data, fetchError, isLoading };
}

export default useFetchRealtimeFirebase;