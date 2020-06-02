import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult1 from '../hooks/useResult';
import ResultList from '../components/ResultList';

export default function App(props) {

  const [searchInput, setSearchInput] = useState('')
  const [errMsg, RetrieveData, searchApi] = useResult1();

  const filterData = (itemFilter) => {
    return RetrieveData.filter( (data1) => {return data1.price === itemFilter} )
  }

  return (
    <>
      <SearchBar searchValue={searchInput} searchChange={setSearchInput} pressEnter={ () => searchApi(searchInput) } /> 
      { errMsg ? <Text>{errMsg}</Text> : null }
      <ScrollView>
        <ResultList title1='Cheap' passFilterData={filterData('$')} />
        <ResultList title1='Medium' passFilterData={filterData('$$')} />
        <ResultList title1='Expensive' passFilterData={filterData('$$$')} />
      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
