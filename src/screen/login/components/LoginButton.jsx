import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../style/StyleLoginScreen'

const LoginButton = () => {
    const handlogin = () => {
        console.log('Press Logined.....')
    }
  return (
    <TouchableOpacity 
    style={styles.btn}
    onPress={handlogin}
    >
        <Text style={styles.btntxt}>Login</Text>
    </TouchableOpacity>
  )
}

export default LoginButton