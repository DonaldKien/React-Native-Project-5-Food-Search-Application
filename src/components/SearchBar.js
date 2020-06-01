import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function App({searchValue, searchChange, pressEnter}) {



  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.searchIcon} />
      <TextInput 
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
    marginTop: 40
  },
  searchIcon: {
      fontSize: 28
  }
});
