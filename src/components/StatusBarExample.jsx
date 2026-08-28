import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const StatusBarExample = () => {
  return (
       <View>
      <StatusBar
        backgroundColor="#2196F3"
        barStyle="light-content"
        hidden={false}
        showHideTransition="fade"
      />
      <Text>Hello</Text>
    </View>
    // <View>
    //   <StatusBar
    //    barStyle='dark-content'
    //    hidden = {false} 
       
    //   />
    // </View>
  )
}

export default StatusBarExample;