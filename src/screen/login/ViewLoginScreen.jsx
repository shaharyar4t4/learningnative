import { View, Text } from 'react-native'
import LoginField from './components/LoginField'
import React from 'react'
import styles from './style/StyleLoginScreen'
import LoginButton from './components/LoginButton'

const ViewLoginScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Login</Text>
            </View>
            <View style={styles.formContainer}>
            <LoginField
                placeholder="Email Address"
                keyboardType="email-address"
            />

            <LoginField 
                placeholder="Password" 
                secureTextEntry={true} 
            />

            <LoginButton/>
            </View>

        </View>
    )
}

export default ViewLoginScreen;