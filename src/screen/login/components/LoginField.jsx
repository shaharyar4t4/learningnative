import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from '../style/StyleLoginScreen';

const LoginField = ({placeholder, keyboardType, secureTextEntry}) => {
  return (
    <View style={{flex: 1}}>
        <TextInput
          style={styles.txtfield}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor='#000'
        />
    </View>
  )
}

export default LoginField;