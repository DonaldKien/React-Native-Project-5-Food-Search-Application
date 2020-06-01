import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultList from '../components/ResultList';

export default function App() {

  const [searchInput, setSearchInput] = useState('')
  const [errMsg, RetrieveData, searchApi] = useResult();

  const filterData = (itemFilter) => {
    return RetrieveData.filter( (data1) => {return data1.price === itemFilter} )
  }

  return (
    <View style={styles.container}>
      <SearchBar searchValue={searchInput} searchChange={setSearchInput} pressEnter={ () => searchApi(searchInput) } /> 
      <Text>Result: {RetrieveData.length}</Text>
      { errMsg ? <Text>{errMsg}</Text> : null }
      <ResultList title1='Cheap' passFilterData={filterData('$')} />
      <ResultList title1='Medium' passFilterData={filterData('$$')} />
      <ResultList title1='Expensive' passFilterData={filterData('$$$')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
