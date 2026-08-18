import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [count, setCount] = useState(0);
    return (
        <View style={{gap:10}}>
            <Text style={{ fontSize: 20 }}>Props</Text>
            <Button title='Counter' onPress={() => setCount(count + 1)} />
            {/*"data" is random vaiable used in code and "count" variable sent the data to child variable..*/}
            <Child data={count} />
        </View>
    )
}

export default Props;

const Style = StyleSheet.create({
    space:{
        gap: 20,
    }
});