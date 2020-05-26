import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({title, result2}) => {

    const [term, setTerm] = useState('')
    const [errMsg, results, searchApi] = useResult();

    const filterResultsByPrice = (price1) => {
        return results.filter( (result1) => {return result1.price === price1} )
    }

    return (
        <View>
            <SearchBar term1={term} changeTerm1={setTerm} onTermSubmit1={ () => searchApi(term) } />
            { errMsg ? <Text>{errMsg}</Text> : null }
            <Text>Result:{results.length}</Text>
            <ResultsList title='Cost Effective' result2={filterResultsByPrice('$')} />
            <ResultsList title='Bit Pricier' result2={filterResultsByPrice('$$')} />
            <ResultsList title='Big Spender' result2={filterResultsByPrice('$$$')} />
        </View>
    );
};

export default SearchScreen;