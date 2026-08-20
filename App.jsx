import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Loginform from './src/components/Loginform'
// import Props from './src/components/Props'
// import Buttonlearn from './src/components/Buttonlearn'
// import UseStateHook from './src/components/UseStateHook'
import InputText from './src/components/InputText'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Styling from './src/components/Styling'
// import Firstcomp from './src/components/Firstcomp'
// import LearnJsx  from './src/components/LearnJsx'


const App = () => {
  return (
    <SafeAreaProvider style={style.mainContainer}>
      {/* <Text>My name is Shaharyar Ali</Text>
            <Text>As a Mobile Application developer</Text>
            <Button title='Continue' />
            <Firstcomp />
            <LearnJsx/> */}
      {/* <Buttonlearn/> */}
      {/* <UseStateHook/> */}
      {/* <Props /> */}

      {/* <InputText /> */}
      {/* <Styling /> */}
      <Loginform/>
    </SafeAreaProvider>

  )
}

export default App;

const style = StyleSheet.create({

  mainContainer: {
    padding: 20,
    gap: 20,
    // paddingTop: 40,
    // paddingHorizontal: 20,
    backgroundColor: "#fff",
  }
});