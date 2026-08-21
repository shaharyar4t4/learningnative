import { View, Text, SectionList, StyleSheet } from 'react-native'
import React from 'react'

const listItems = [
    {
        title: 'Fruits',
        data: [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Mango' },
            { id: 3, name: 'Orange' },
        ],
    },
    {
        title: 'Vegetables',
        data: [
            { id: 4, name: 'Carrot' },
            { id: 5, name: 'Potato' },
            { id: 6, name: 'Tamatar' },
        ],
    },
];

const SectionListexample = () => {
    const renderItems = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
        </View>
    );
    const renderSectionHeader = ({ section }) => (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{section.title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SectionList</Text>
            <SectionList
                // refer the data
                sections={listItems}
                // the data in nested formate
                renderItem={renderItems}
                // get the title like furit title 
                renderSectionHeader={renderSectionHeader}
                // refer the unique ID
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 15,
    },
    item: {
        backgroundColor: '#add8e6',
        padding: 10,
        marginVertical: 5,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
    },
    header: {
        backgroundColor: '#90ee90',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default SectionListexample;