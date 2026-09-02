import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const PostApi = () => {
  const [formData, setformData] = useState({ id: '', name: '', email: '' });

  // field is show --> name , id, and email
  // value is show -->> actucal value 
  const handleInput = (field, value) => {
    //"..." this separte opeartor 
    // basically yehe jo form data "three boxes ha" show as 3 dots ...
    // show the field --> with value
    setformData({ ...formData, [field]: value });
  }
  // preform the post method..
  const handleSubmit = async () => {
    try{
      const response = await axios.post('http://192.168.18.14:3000/user', formData); // formData is sent data ---> main DB
      Alert.alert('sucess!', 'Data Submitted successfully');

      // after submission of data the will be reset fields.
      setformData({id: '', name: '', email: ''});

      console.log(response.data);
    }catch(e){
      Alert.alert('Error', 'Failed Submit to data');
    }
  }
  return (
    <View>
      <Text style={styles.txt}>Resigtion Form</Text>
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
    fontSize: 30,
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

export default PostApi;