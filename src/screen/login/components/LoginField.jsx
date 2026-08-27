import { View, Text, TextInput } from 'react-native'
import React from 'react'

const LoginField = ({placeholder, keyboardType}) => {
  return (
    <View style={{flex: 1}}>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
        />
    </View>
  )
}

export default LoginField;