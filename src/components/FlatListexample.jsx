import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const data = [
    {id: 1, title: 'item 1'},
    {id: 2, title: 'item 2'},
    {id: 3, title: 'item 3'},
    {id: 4, title: 'item 4'},
    {id: 5, title: 'item 5'},
    {id: 6, title: 'item 6'},
    {id: 7, title: 'item 7'},
    {id: 8, title: 'item 8'},
    {id: 9, title: 'item 9'},

];

const FlatListexample = () => {

    const renderItems = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text>Flate List</Text>
            <FlatList 
            // show the data..
            data = {data} 
            // render item in array..
            renderItem ={renderItems} 
            // allocated the key's.. make sure it is unique key..
            keyExtractor = {item => item.id}
            // implement the CSS..
            contentContainerStyle = {styles.list}
            />
        </View>
    )
}

export default FlatListexample;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 0,
    },
    list: {
        paddingHorizontal: 15,
    },
    item :{
        backgroundColor: 'crimson',
        borderWidth: 5,
        borderColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    },
});