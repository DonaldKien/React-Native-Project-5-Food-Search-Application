import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import useResult from '../hooks/useResult';


const ResultList = ({passFilterData, title1}) => {

    return (
       <View>
           <Text>{title1}</Text>
           <Text>Result: {passFilterData.length}</Text>
           <FlatList 
           horizontal={true}
            data={passFilterData} 
            keyExtractor={ item1 => item1.id } 
            renderItem={ ({item}) => { return <Text>{item.name}</Text>} }
           />
       </View> 
    )
}


export default ResultList;