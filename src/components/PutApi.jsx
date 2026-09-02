import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const PutApi = () => {

    const [formData, setformData] = useState({ id: '', name: '', email: '' });
    // handle input fields..
    const handleInput = (feild, value) => {
        setformData({ ...formData, [feild]: value });
    }

    const handleUpdateSubmit = async () => {
        try {
            const response = await axios.put(`http://192.168.18.14:3000/user/${formData.id}`, {
                name: formData.name,
                email: formData.email,
            }); // formData is sent data (update) ---> main DB
            
            Alert.alert('sucess!', 'Updated Data Submitted successfully');

            // after submission of data the will be reset fields.
            setformData({ id: '', name: '', email: '' });

            console.log(response.data);
        } catch (e) {
            Alert.alert('Error', 'Failed Submit to data');
        }
    };
    return (
        <View>
            <Text style={styles.txt}>Update Registration Form</Text>
            <TextInput
                style={styles.txtfield}
                placeholder='Enter ID'
                placeholderTextColor='#000'    
                // this fromData is bending from field
                value={formData.id}
                // "value" is show the submission value 
                onChangeText={(value) => handleInput('id', value)}
            />
            <TextInput
                style={styles.txtfield}
                placeholder='Enter Name'
                placeholderTextColor='#000'
                // this fromData is bending from field
                value={formData.name}
                // "value" is show the submission value 
                onChangeText={(value) => handleInput('name', value)}
            />
            <TextInput
                style={styles.txtfield}
                placeholder='Enter Email'
                placeholderTextColor='#000'
                // this fromData is bending from field
                value={formData.email}
                // "value" is show the submission value 
                onChangeText={(value) => handleInput('email', value)}
            />
            <Button title='Update Form' onPress={handleUpdateSubmit}/>

        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        fontSize: 20,
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
});
export default PutApi;