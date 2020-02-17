import React, { useContext } from 'react';
import {ApiContext} from './App';

export default function Button() {
    const {setUsersData, setLoading, setError} = useContext(ApiContext);
    const URL = `https://randomuser.me/api/?results=5`; 

    function fetchUsersData() {
        setLoading(true);
        setError(false);
        fetch(URL)
            .then(res => {
                if(res.ok) {
                    return res.json();
                }
                throw new Error();
            })
            .then(data => {
                setUsersData(data.results);
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            })

    }
    return (
        <div className='button'>
            <button onClick={fetchUsersData}>Get Users!</button>
        </div>
    )
}
