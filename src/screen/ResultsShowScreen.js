import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp'
import { ScrollView } from 'react-native-gesture-handler';

const ResultsShowScreen = ({navigation}) => {

    const [singleData, getSingleData] = useState(null);

    const id = navigation.getParam('id1')

    const getResult = async (id2) => {
        const response1 = await yelp.get(`/${id2}`);
        getSingleData(response1.data)
    }
    console.log(singleData)

    useEffect( () => { getResult(id) }, [] );

    if (!singleData){
        return null
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.name}>{singleData.name}</Text>
                <FlatList 
                showsVerticalScrollIndicator={false}
                data = {singleData.photos} 
                keyExtractor = { (photo1) => photo1 } 
                renderItem = { ({item}) => {return <View style={styles.imageContainer}><Image source={{uri:item}} style={styles.image} /></View>} }
                />
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        alignItems:'center',
        flex:1
    },
    name: {
        fontSize: 20,
        paddingVertical: 5,
        fontWeight: 'bold'
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 20
    }
})

export default ResultsShowScreen