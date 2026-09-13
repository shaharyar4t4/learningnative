import { View, Text, Button, StyleSheet } from 'react-native'
import styles from './StyleScreen'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Home</Text>
            {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> */}
        </View>
    )
}

export default Home;
