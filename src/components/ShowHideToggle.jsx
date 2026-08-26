import { View, Text, StyleSheet, Button } from 'react-native'
import ShowContainer from './ShowContainer'
import React, { useState } from 'react'

const ShowHideToggle = () => {
    const [status, setStatus] = useState(true);
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>ShowHideToggle</Text>
            {
                status ? <ShowContainer/> : null
            }
            {/* <Button title='Show' onPress={()=> setStatus(true)}/>
            <Button title='hide' onPress={()=> setStatus(false)}/> */}
            <Button title='Tap to Here' onPress={() => setStatus(!status)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        gap: 10
    },
    heading: {
        fontSize: 20,
        margin: 10
    }
});
export default ShowHideToggle;