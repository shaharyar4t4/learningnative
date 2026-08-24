import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const InforDetail = ({count, points}) => {
    useEffect(()=> {
        console.log('child call')
    }, [count])
  return (
    <View>
      <Text style={style.heading}>Counter: {count}</Text>
      <Text style={style.heading}>Points: {points}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    heading:{
        fontSize: 20,
        marginTop: 10,
        marginBottom:10,
    },
   
})

export default InforDetail;