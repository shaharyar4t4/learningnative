import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={style.mainContainer}>
      <Text>My name is Shaharyar Ali</Text>
      <Text>As a Mobile Application developer</Text>
      <Button title='Continue' />
    </View>


  )
}

export default App;

const style = StyleSheet.create({

  mainContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  }
});