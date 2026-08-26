import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Loader = () => {
    const [status, setStatus] = useState(false);
    const toggle = () => {
        return setStatus(!status);
    }
    return (

        <View style={styles.container}>
            <TouchableOpacity onPress={toggle} style={styles.button}>
                <Text style={styles.buttonText}>
                    {status ? 'Hide Loader' : 'Show Loader'}
                </Text>
            </TouchableOpacity>
            {
                status && (
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size='30' color='#f73d13' />
                        <Text style={styles.loadingText}>Loading....</Text>
                    </View>
                )
            }

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    button : {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    loaderContainer: {
        width: 120,
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        elevation: 5,
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#4CAF50',
        fontWeight: '600',
    },
});

export default Loader;