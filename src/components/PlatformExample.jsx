/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PlatformExample = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>{
                // the text show on the base of platefrom..
                Platform.OS === 'ios' ? 'Welcome IOS user!' : 'Welcome Android user!'
            }</Text>
            <Text style={styles.platformText}>
                {
                    Platform.select({
                        // target mutliple plateform ...
                        ios: 'Your device is IOS',
                        android: 'your device is android',
                        macos: 'your device is macos'

                    })
                }
            </Text>
        </View>
    );
};

export default PlatformExample;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // show multiple color by using color (platefrom)
        backgroundColor: Platform.select({
            ios: 'lightblue',
            android: 'lightgreen',
        }),
        borderRadius: 20,
    },
    welcomeText: {
        fontSize: 24,
        color: Platform.OS === 'ios' ? 'blue' : 'green',
        marginBottom: 20,
    },
    platformText: {
        fontSize: 18,
        color: '#000',
    },
});