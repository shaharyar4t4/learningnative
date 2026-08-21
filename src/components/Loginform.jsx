import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Loginform = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>Login Screen</Text>
            <TextInput
                style={styles.field}
                placeholder='Enter your Username'
                value={name}
                onChangeText={(value) => setName(value)}
            />
            <TextInput
                style={styles.field}
                placeholder='Enter your Password'
                value={password}
                secureTextEntry
                onChangeText={(value) => setPassword(value)}
            />
            <Text style={styles.txt} >Your Name is: {name}</Text>
            <Text style={styles.txt} >Your Password is: {password}</Text>
            {/*learning about the how to reset the textfields*/}
            <Button
                title="Continue"
                onPress={() => {
                    setName('');
                    setPassword('');
                }}
            />
        </View>
    )
}

export default Loginform;

const styles = StyleSheet.create({
    mainContainer: {
        gap: 15,
    },
    heading: {
        fontSize: 25,
        fontWeight: '600',
        color: '#000'
    },
    txt: {
        fontSize: 16,
        color: '#000'
    },

    field: {
        borderWidth: 1,
        borderRadius: 10,
        color: '#000'
    },

    btn: {
        borderCurve: 20,
        color: '#999'

    }
})
