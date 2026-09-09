import { View, Text } from 'react-native'
import React from 'react'

const AboutusScreen = (props) => {

  // console.log(props.route.params);  debug to find the actual value path..
  const {username} = props.route.params;  // is ka ander username ka props ha ..
  return (
    <View>
      <Text>Your userName is: {username}</Text>
    </View>
  )
}
export default AboutusScreen;