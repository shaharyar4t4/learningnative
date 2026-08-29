import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

// no need to render the components.. ye driect target karta ha componet ko..
const UseRefHook = () => {
    // main start of useRef hook..
    const myRef = useRef(); // instance
    const handleRef = () =>{
        // myRef.current.setNativeProps({
        //     text:'Shaharyar',
        //     style:{color:'white', backgroundColor: 'crimson'}
        // })
        myRef.current.focus();
    }
    return (
        <View style={styles.mainContainer}>
            <TextInput
                // target componet by ref
                ref={myRef}
                style={styles.input}
                placeholder="Enter you demo text"
                placeholderTextColor="#999"
            />

            <TouchableOpacity style={styles.btn} onPress={handleRef}>
                <Text style={styles.btntxt}> Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0'
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
    },

    btn: {
        width: '100%',
        height: 50,
        backgroundColor: '#007Bff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btntxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },


})
export default UseRefHook;