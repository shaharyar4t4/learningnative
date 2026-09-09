import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = ({ navigation }) => {
    const [userName, setusernName] = useState('');
  return (
    <View>
        <TextInput
            style= {{color: '#000'}}
            placeholder='Enter username'
            onChangeText={setusernName}
            placeholderTextColor='#000'
            
        />
        <Button 
        title='Login'
        // this share data in hardcode formate..
        // onPress={()=> navigation.navigate('About', {username: 'shaharyar', age: 24})}
        onPress={()=> navigation.navigate('About', {username: userName})}
        
        
        />
    </View>
  )
}

export default LoginScreen;