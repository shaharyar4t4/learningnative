import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const DeleteApi = () => {
    const [id, setId] = useState();

    // delete fecture..
    const handleSubmit = async () => {
        try {
            const response = await axios.delete(`http://192.168.1.8:3000/user/${id}`);

            Alert.alert('Sucess', 'Removed Sucessfully');
            console.log(response.data);
            // emtry the TextInput after submit the data..
            setId('');
        } catch (e) {
            Alert.alert('Failed', 'Something went wrong');
        }

    };
    return (
        <View>
            <Text style={styles.txt}>Remove the Data</Text>
            <TextInput
                style={styles.txtfield}
                placeholderTextColor='#000'
                placeholder='Enter ID'
                value={id}
                onChangeText={(value) => setId(value)}
            />


            <Button title='Remove the data' onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 25,
        margin: 15

    },
    txtfield: {
        color: '#000',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 15,
        height: 50,
        marginBottom: 15,

    },
})

export default DeleteApi;