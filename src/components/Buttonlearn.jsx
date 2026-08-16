import { View, Text,Button } from 'react-native'
import React from 'react'

const Buttonlearn = () => {
  const getName = (name) => {
    // console.warn("-->> Hi, function testing..");
    console.warn("-->> name: ", name);
  };
  return (
    <View>
      <Text>Button</Text>
      {/* <Button title ="Continue" onPress={getName}/> */}
      {/* agar hum na call as karta ha getName() is ka mtlab hota ha funtion apna ap ko call karta */}
      <Button title = "Continue" onPress={getName('Shaharyar')} />
    </View>
  )
}

export default Buttonlearn;