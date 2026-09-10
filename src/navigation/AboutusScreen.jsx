import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const AboutusScreen = (props) => {

  // console.log(props.route.params);  debug to find the actual value path..
  const {username} = props.route.params;  // is ka ander username ka props ha ..
  return (
    <View>
      <Text style={Styles.mainContainer}>Your userName is: {username}</Text>
      <Button 
      title='Go to back'
      onPress={() => props.navigation.goBack()}
      />
    </View>
  )
}
const Styles = StyleSheet.create({
  mainContainer:{
    margin: 20,
  }
})
export default AboutusScreen;