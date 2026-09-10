// import { View, Text, Button, StyleSheet, SectionList } from 'react-native'
// import React from 'react'
// // import SearchBar from './src/components/SearchBar'
// // import PlatformExample from './src/components/PlatformExample'
// // import GetApiList from './src/components/GetApiList'
// // import DeleteApi from './src/components/DeleteApi'
// // import PatchApi from './src/components/PatchApi'
// // import PutApi from './src/components/PutApi'
// // import PostApi from './src/components/PostApi'
// // import GetApi from './src/components/GetApi'
// // import AleatExample from './src/components/AleatExample'
// // import ViewLoginScreen from './src/screen/login/ViewLoginScreen'
// // import ModelDailogy from './src/components/ModelDailogy'
// // import UseRefHook from './src/components/UseRefHook'
// // import StatusBar from './src/components/StatusBarExample'
// // import StatusBarExample from './src/components/StatusBarExample';
// // import PressableComponents from './src/components/PressableComponents'
// // import Loader from './src/components/Loader'
// // import StyleWithButton from './src/components/StyleWithButton'
// // import ShowHideToggle from './src/components/ShowHideToggle'
// // import UseEffectHookUnmounting from './src/components/UseEffectHookUnmounting'
// // import UseEffectHookupdateface from './src/components/UseEffectHookupdateface'
// // import UseEffectHook from './src/components/UseEffectHook'
// // import Clascompenent from './src/components/Classcomponent'
// // import Gridview from './src/components/Gridview'
// // import ContactListScreen from './src/screen/contact/ContactListScreen'
// // import Loginform from './src/components/Loginform'
// // import FlatListexample  from './src/components/FlatListexample'
// // import Props from './src/components/Props'
// // import Buttonlearn from './src/components/Buttonlearn'
// // import UseStateHook from './src/components/UseStateHook'
// // import InputText from './src/components/InputText'
// // import { SafeAreaProvider } from 'react-native-safe-area-context'
// // import Loginscreen from './src/components/Loginscreen'
// // import Styling from './src/components/Styling'
// // import Firstcomp from './src/components/Firstcomp'
// // import LearnJsx  from './src/components/LearnJsx'
// // import SectionListexample from './src/components/SectionListexample'

// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* <Text>My name is Shaharyar Ali</Text>
//             <Text>As a Mobile Application developer</Text>
//             <Button title='Continue' />
//             <Firstcomp />
//             <LearnJsx/> */}
//       {/* <Buttonlearn/> */}
//       {/* <UseStateHook/> */}
//       {/* <Props /> */}

//       {/* <InputText /> */}
//       {/* <Styling /> */}
//       {/* <Loginform/> */}
//       {/* <FlatListexample/> */}
//       {/* <SectionListexample /> */}

//       {/* <Loginscreen /> */}
//       {/* <ContactListScreen/> */}
//       {/* <Gridview /> */}
//       {/* <Clascompenent/> */}
//       {/* <UseEffectHook/> */}
//       {/* <UseEffectHookupdateface/> */}
//       {/* <UseEffectHookUnmounting/> */}
//       {/* <ShowHideToggle/> */}
//       {/* <StyleWithButton/> */}
//       {/* <Loader/> */}
//       {/* <ViewLoginScreen/> */}
//       {/* <PressableComponents/> */}
//       {/* <StatusBarExample/> */}
//       {/* <UseRefHook/> */}
//       {/* <ModelDailogy/> */}
//       {/* <ViewLoginScreen/> */}
//       {/* <AleatExample/> */}
//       {/* <GetApi/> */}
//       {/* <PostApi/> */}
//       {/* <PutApi /> */}
//       {/* <PatchApi/> */}
//       {/* <DeleteApi/> */}
//       {/* <GetApiList/> */}
//       {/* <PlatformExample/> */}
//       {/* <SearchBar/> */}

//     </View>


//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     flex: 1,
//     backgroundColor: '#f0f0f0',

//   },
// });
// export default App;

import { StyleSheet, Button, Alert } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/HomeScreen'
import AboutusScreen from './src/navigation/AboutusScreen'
import LoginScreen from './src/navigation/LoginScreen'
import MyHeader from './src/components/MyHeader'
import Example from './src/components/Example'

// this is important for implementation of stack navigation..
const Stack = createNativeStackNavigator();

// show alert function for globally call..
const sayHello = () => {
  Alert.alert('Hello', 'Hello User', [], {cancelable: true});
};

// this reference for globally call..
// but is code par muhja shak ha ...
const HeaderTitle = () => {
  const navigation = useNavigation();

  return (
    <Button
      title='One'
      color='red'
      onPress={() => navigation.navigate('Example')}
    />
  );
};
const HeaderRight = () => <Button title='two' color='green' onPress={sayHello}/>;

const App = () => {
  return (

    <NavigationContainer>
      {/*Prefrom the stack navigation*/}
      <Stack.Navigator
        screenOptions={{
          headerStyle: Styles.header,
          headerTitleStyle: Styles.headerTitle,
          headerTintColor: '#fff',
          // app on screens.
          contentStyle: Styles.screenStyle
        }}
      >
        <Stack.Screen
          // name of screen.. 
          name='Header'
          // mention the path of Screen
          component={MyHeader}
          // apply the CSS in Specific components
          options={{
            title: 'Header',
            // headerTitle: () => <Button title='One' color='red' />,
            // headerRight: () => <Button title='One' color='green' />
            // call the references values...
            headerTitle: HeaderTitle,
            headerRight: HeaderRight,
          }}

        />
        <Stack.Screen
          // name of screen.. 
          name='login'
          // mention the path of Screen
          component={LoginScreen}
          // ye option use hota jab humme apna header ko same rakhana hota ha complete application..
          // when you multiple position for this code...
          options={{
            title: 'Welcome to over Application',
            // mostly ye recommands color ap ye call karvo
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 20,
              color: 'yellow'
            },
            headerStyle: {
              backgroundColor: 'red',
            },
          }}

        />

        <Stack.Screen
          // name of screen..
          name='Home'
          // mention the path of screen
          component={HomeScreen}
        // not show the header 
        // options={{headerShown: false}}

        />

        <Stack.Screen
          // name of screen..
          name='About'
          // mention the path of screen
          component={AboutusScreen}
          options={{
            headerShown: false,
          }}

          />

        <Stack.Screen
          name='Example'
          component={Example}
        />


      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200EE',

  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  screenStyle: {
    backgroundColor: 'lightgreen'
  }

});
