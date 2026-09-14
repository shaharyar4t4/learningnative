import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";


const AsyncStoreage = () => {
    const [username, setusename] = useState('');
    const [storeusername, setstoreusername] = useState('');

    // this func is specific for user save name
    const saveusername = async () => {
        await AsyncStorage.setItem('username', username);
        // emtry the textfield
        setusename('');

        Alert.alert('Username Saved');
    };
    // this func is specific for user get name
    const getusername = async () => {
        const saveusername = await AsyncStorage.getItem('username');
        if (saveusername) {
            setstoreusername(saveusername);
        } else {
            Alert.alert('Username not found');

        }
    };
    // this func is specific for user remove name
    const removeusername = async () => {
        await AsyncStorage.removeItem('usename');
        setstoreusername('');

        Alert.alert('Username is Removed');

    };

    useEffect(()=> {
        getusername();
    }, []);


    return (
        <View >
            {/* user jo bha type karya ga in textfield me "username" */}
            <TextInput
                placeholder="Enter username"
                value={username}
                onChangeText={setusename}
                placeholderTextColor='#000'
            />

            <Button title='Save Username' onPress={saveusername} />
            <Button title='Get Username' onPress={getusername} />
            <Button title='Remove Username' onPress={removeusername} />

            <Text>Stored Username: {storeusername} </Text>
        </View>
    )
}

export default AsyncStoreage;

