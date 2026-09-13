import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import styles from './StyleScreen'

const About = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>About</Text>
            {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> */}

        </View>
    )
}



export default About;