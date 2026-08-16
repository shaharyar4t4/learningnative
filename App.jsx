import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import Firstcomp from './src/components/Firstcomp'
import LearnJsx  from './src/components/LearnJsx'

const App = () => {
  return (
    <View style={style.mainContainer}>
      <Text>My name is Shaharyar Ali</Text>
      <Text>As a Mobile Application developer</Text>
      <Button title='Continue' />
      <Firstcomp />
      <LearnJsx/>
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