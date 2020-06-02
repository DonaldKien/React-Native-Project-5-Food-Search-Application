import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function App({searchValue, searchChange, pressEnter}) {



  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <Feather name='search' style={styles.searchIcon} />
      </View>
      <TextInput 
      style={styles.searchText}
      placeholder='Search' 
      autoCapitalize='none' 
      autoCorrect={false}  
      onChangeText={searchChange} 
      value={searchValue} 
      onEndEditing={pressEnter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5,
    marginHorizontal: 10
  },
  iconView: {
    height: 45,
    width: 40,
    justifyContent:'center',
    backgroundColor:'#dedede',
    alignItems:'center'
  },
  searchIcon: {
    fontSize: 28,
  },
  searchText: {
    backgroundColor:'#dedede',
    flex:1,
    padding: 5,
    height: 45
  }
});
