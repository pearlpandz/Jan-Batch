
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function useFetch(url, intialValue) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(intialValue);
    const [error, setError] = useState();

    const fetchData = useCallback(async () => {
        setLoading(true);
        await axios.get(url).then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch(error => {
            setError(error) 
            setLoading(false);
        });
    }, [url])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return { loading, data, error, fetchData }
}