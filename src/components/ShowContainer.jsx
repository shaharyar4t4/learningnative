import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ShowContainer = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Show Container</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        padding: 30,
        borderCurve: 10,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    heading:{
        fontSize: 20,
        color: '#fff'
    }
});


export default ShowContainer;