import { View, Text, Button, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'

const StyleWithButton = () => {
    return (
        <View style={styles.mainContainer}>
            <Button title='Press Me' />
            <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
                <Text style={styles.txtbtn}>Click Here</Text>
            </TouchableOpacity>

            <TouchableHighlight style={styles.btn} underlayColor="#e40000" onPress={() => { console.log("Hello") }}>
                <Text style={styles.txtbtn}>CLick Here</Text>
            </TouchableHighlight>

        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        margin: 10
    },

    btn: {
        padding: 20,
        margin: 20,
        backgroundColor: '#6469ff',
        borderRadius: 20,
        elevation: 5
    },
    txtbtn: {
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }


});

export default StyleWithButton;