import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [username, setusername] = useState('');
    return (
        <View style={Style.space}>
            <Text style={{ fontSize: 20 }}>InputText</Text>
            <TextInput style={{ borderWidth: 1, borderRadius: 5, color: '#000' }} placeholder='Enter your Usernames' value={username} onChangeText={(value) => setusername(value)} />
            <Text style={{ fontSize: 20 }}>Your Username is: {username}</Text>
            <Button title='Continous' onPress={() => setusername('')} />

        </View>
    )
}

export default InputText;

const Style = StyleSheet.create({
    space: {
        gap: 20,
    }
});