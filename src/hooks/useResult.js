import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
const [results, setResults] = useState([]);
const [errMsg, setErrMsg] = useState('');

const searchApi = async (searchTerm) => {
    try {
        const response = await yelp.get('/search', {
            params: {term:searchTerm, location: 'New York', limit: 50}
        });
        setResults(response.data.businesses);
    }
    catch (err) {
        setErrMsg('Something went wrong')
    }
};
// Call searchApi when component is first rendered. Bad Code.
// searchApi('coffee'); // will cause infinite loop due to re-rendering.
useEffect ( () => {searchApi('pasta')}, [] ); // In order to make it run once

return [errMsg, results, searchApi];
};

