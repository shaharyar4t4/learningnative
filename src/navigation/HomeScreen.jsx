import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

// always define the props of "navigation" key

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>HomeScreen</Text>

            <Button title='Go to About'
                onPress={() => navigation.navigate('About')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default HomeScreen;