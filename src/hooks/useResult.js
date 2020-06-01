import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default () => {

    const [RetrieveData, setRetrieveData] = useState([]);
    const [errMsg, setErrMsg] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get ('/search', {
                params: {term:searchTerm, limit:50, location: 'New York'}
            });
            setRetrieveData(response.data.businesses)
        }
        catch (err) {
            setErrMsg('Something went wrong');
        }
    }
    useEffect( () => {searchApi('pasta')}, [] );
    return [errMsg, RetrieveData, searchApi];
}

