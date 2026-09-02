import { View, Text, StyleSheet, Alert, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const PatchApi = () => {

    const [formData, setformData] = useState({ id: '', name: '', email: '' });

    // handle input --> field
    const handleInput = (field, value) => {
        setformData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const respone = await axios.patch(`http://192.168.1.8:3000/user/${formData.id}`,
                {
                    // phela tu hum na form ko separte kiyaha phir new name ki value ko update kardi field me and same for email..
                    ...formData.name && { name: formData.name },
                    ...formData.email && { email: formData.email },
                });
            Alert.alert('sucess', 'Data Updated Sucessfully');
            console.log(respone.data);
            // after submission of data the will be reset fields.
            setformData({ id: '', name: '', email: '' });
        } catch (e) {
            Alert.alert('Error', 'Submission Failed');
        }
    };

    return (
        <View>
            <Text style={styles.txt}>Update the Specific Field</Text>
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
            <Button title='Submit form' onPress={handleSubmit} />
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

export default PatchApi