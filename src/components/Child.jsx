import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    let countervalue = props.data;
    // just for debug the tool
    // console.log(Props);

  return (
    <View>
      <Text style ={{fontSize:20}}>Counter: {countervalue} </Text>
          {/* <Text style={{fontSize: 20}}>{props.data}</Text> */}
      {/* <Text style = {{fontSize: 20}}>{countervalue}</Text> */}
    </View>
  )
}

export default Child;