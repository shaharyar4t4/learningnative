import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableComponents = () => {
  const handlePress = () => {
    console.log('on Press')
  }
  const handlePressIn = () => {
    console.log('on Press In')
  }
  const handlePressOut = () => {
    console.log('on Press Out')
  }
  const handlePressLong = () => {
    console.log('on Press Long')
  }
  return (
    <View style={style.container}>
      {/*Pressable Provide multiple press features*/}
      <Pressable style={style.btn}  
      
      // onPress={handlePress}
      // onPressIn={handlePressIn}
      // onPressOut={handlePressOut}
      onLongPress={handlePressLong}
      delayLongPress={5000}
      
      >
        <Text style={style.btntxt}>PressableComponents</Text>

      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },

  btn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff'
  },
  btntxt: {
    fontSize: 18,
    color: '#ff',

  }
});

export default PressableComponents