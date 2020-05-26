import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';


const ResultsList = ({title, result2}) => {

    return(
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text>Result:{result2.length}</Text>
            <FlatList 
            horizontal={true} 
            data={result2} 
            keyExtractor= { result3 => result3.id } 
            renderItem={ ({item}) => { return <Text>{item.name}</Text> } }
            />
        </View>
    )
}

const styles=StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight:'bold'
    }
})

export default ResultsList;