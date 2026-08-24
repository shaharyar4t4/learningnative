import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import ShowChild from './ShowChild'


const UseEffectHookUnmounting = () => {
    const [showChild, setshowChild] = useState(true)
    return (
        <View>
            <Text style={style.heading}>Parent Components</Text>
            {
                showChild ? <ShowChild /> : null
            }
            {/* Hide child Componemt*/}
            <Button title=' Toggle' onPress={() => setshowChild(!showChild)} />
        </View>
    )
}

const style = StyleSheet.create({
    heading: {
        fontSize: 20,
    }
});

export default UseEffectHookUnmounting