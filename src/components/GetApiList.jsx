import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetApiList = () => {
    const [myData, setmyData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.8:3000/user').then((respone) => {
            setmyData(respone.data);
            console.log(respone.data);
        })
    }, []);

    const renderItemdetial =({ item }) => (
        <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.header}>User's Detial</Text>
        <FlatList
        // they show the data in the form of array..
        data={myData}
        renderItem={renderItemdetial}
        // id must in String it is best pactrices..
        keyExtractor={(item) => item.id.toString()}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0f7fa',
        padding: 20,
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00796b',
        margin: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 15,
        borderRadius: 10,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 10,
        // elevation: 8,
        borderLeftWidth: 5,
        borderLeftColor: '#00796b',
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#004d40',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#00796b',
    },
});
export default GetApiList;