import { View, Text, Button, StyleSheet, SectionList } from 'react-native'
import React from 'react'
import UseEffectHookupdateface from './src/components/UseEffectHookupdateface'
// import UseEffectHook from './src/components/UseEffectHook'
// import Clascompenent from './src/components/Classcomponent'
// import Gridview from './src/components/Gridview'
// import ContactListScreen from './src/screen/contact/ContactListScreen'
// import Loginform from './src/components/Loginform'
// import FlatListexample  from './src/components/FlatListexample'
// import Props from './src/components/Props'
// import Buttonlearn from './src/components/Buttonlearn'
// import UseStateHook from './src/components/UseStateHook'
// import InputText from './src/components/InputText'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import Loginscreen from './src/components/Loginscreen'
// import Styling from './src/components/Styling'
// import Firstcomp from './src/components/Firstcomp'
// import LearnJsx  from './src/components/LearnJsx'
// import SectionListexample from './src/components/SectionListexample'

const App = () => {
  return (
    <View style={styles.container}>
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
      {/* <Loginform/> */}
      {/* <FlatListexample/> */}
      {/* <SectionListexample /> */}

      {/* <Loginscreen /> */}
      {/* <ContactListScreen/> */}
      {/* <Gridview /> */}
      {/* <Clascompenent/> */}
      {/* <UseEffectHook/> */}
      <UseEffectHookupdateface/>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#f0f0f0',

  },
});
export default App;

