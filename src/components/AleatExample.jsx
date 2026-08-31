import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const showAlert = () => {
    Alert.alert(
        // title
        'Aleat title showed',
        // show desciption
        'Aleat message showed',
        // specical fnc like Yes or No..
        [
            // specific working for cancel work
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel'),
                style: 'cancel'
            },

            // specific working for 
            {
                text: 'Okay',
                onPress: () => console.log('okay'),
            }
        ],
        // when you click outside of box aleat box is gone..

        { cancelable: true }

    );
};

const AleatExample = () => {
    return (
        <View>
            <Text style={styles.txtsize}>AleatExample</Text>
            <TouchableOpacity onPress={showAlert} style={styles.btn}>
                <Text style={styles.btntxt}>Show Alert</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        gep: 10,


    },

    txtsize: {
        fontSize: 25
    },

    btn: {
        backgroundColor: '#918bff',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btntxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },

});

export default AleatExample;