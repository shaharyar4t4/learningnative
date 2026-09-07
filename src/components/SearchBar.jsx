import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const SearchBar = () => {
  
  const [searchQuery, setsearchQuery] = useState('');

  //dum data
  const contants = [
    {id: 1, name: 'Shaharyar'},
    {id: 2, name: 'Hassan'},
    {id: 3, name: 'Fahad'},
    {id: 4, name: 'Ali'},
    {id: 5, name: 'waqar'},
  ];

  // is funtion ka kam ye "Data ko filter" karna me help karta ha..
  const filteredContacts = contants.filter(contact => 
    // 1st hum is ko lower case shift karya ga 
    // or jo ap kiya DB me data wehe show karya ga..
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // render the actucall data..
  const renderItem = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style= {styles.title}>Contact List</Text>
      <TextInput
      style={styles.searchBar}
      placeholder='Search..'
      placeholderTextColor = '#888'
      value={searchQuery}
      onChangeText={setsearchQuery}
      />
      <FlatList
      style= {styles.listContainer}
      // mention the souce of data..
      data={filteredContacts} 
      keyExtractor={item => item.id}
      // render the data..
      renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3f2fd',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1e88e5',
        marginBottom: 20,
        textAlign: 'center',
    },
    searchBar: {
        height: 55,
        borderColor: '#90caf9',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    listContainer: {
        paddingBottom: 20,
    },
    contactItem: {
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contactName: {
        fontSize: 18,
        color: '#424242',
    },
});

export default SearchBar;