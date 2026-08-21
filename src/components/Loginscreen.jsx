import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Loginscreen = () => {

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const handleLogin = () => {
        console.log('Email: ', email);
        console.log('password: ', password);
        setemail('');
        setpassword('');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login Screen</Text>
            <TextInput
                style={styles.input}
                placeholder='Email Address'
                value={email}
                onChangeText={setemail}
                // show the email sign..
                keyboardType="email-address"
                // no word in capital words..
                autoCapitalize="none"
                // placeholder color
                placeholderTextColor="#999"
            />
            <TextInput
                style={styles.input}

                placeholder='Password'
                value={password}
                //secure text like hide any text
                secureTextEntry
                onChangeText={setpassword}
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: '#333',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default Loginscreen