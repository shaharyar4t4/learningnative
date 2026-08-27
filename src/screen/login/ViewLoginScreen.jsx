import { View, Text } from 'react-native'
import LoginField from './components/LoginField'
import React from 'react'
import styles from './style/StyleLoginScreen'

const ViewLoginScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Login </Text>
            </View>
            <LoginField
                placeholder="Email Address"
                keyboardType="email-address"
            />
        </View>
    )
}

export default ViewLoginScreen;