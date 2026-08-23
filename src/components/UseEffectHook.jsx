import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {

    const [count, setCount] = useState(1);
    // useEffect is make the call back function..
    // [] is refer the call useeffect only one time only

    useEffect(() => {
        console.log('this is useEffect Hook');
    },[]);

    return (
        <View>
            <Text style={{ fontSize: 20 }}>UseEffectHook</Text>
            <Text style={{ fontSize: 15 }}>Count: {count}</Text>
            <Button title='increases' onPress={() => setCount(count + 1)} />

        </View>
    )
}

export default UseEffectHook;

