import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';


const ResultList = ({passFilterData, title1, navigation}) => {

    if(!passFilterData.length){ return null }

    return (
       <View style={styles.resultsList}>
            <Text style={styles.title}>{title1}</Text>
            <Text style={{marginLeft: 10}}>{passFilterData.length} results</Text>
            <FlatList 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={passFilterData} 
            keyExtractor={ item1 => item1.id } 
            renderItem={ ({item}) => 
            <TouchableOpacity onPress={ () => navigation.navigate('ResultsShow', {id1: item.id})}>
                <ResultsDetail result={item}/>
            </TouchableOpacity>
             }
            />
       </View> 
    )
}

const styles=StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    resultsList: {
        marginTop: 10
    }
})


export default withNavigation(ResultList);