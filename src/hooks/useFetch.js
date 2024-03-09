import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utils/api';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setLoading(true);
        setData(null);
        setError(null);

        fetchDataFromApi(url)
            .then((resp) => {
                setData(resp);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError("Something Went Wrong...");
            })

    }, [url]);

    return { data, loading, error };
}

export default useFetch