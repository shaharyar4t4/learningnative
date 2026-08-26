import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const ShowChild = () => {
    // this is for normal states
    // useEffect(()=>{
    //     console.log('child Components <--');
    // }, []);

    useEffect(() => {
        // this is for unmounting the child component
        return () => {
            console.log('the child is unmounted');
        }
    })
    return (
        <View>
            <Text>ShowChild</Text>
        </View>
    )
}

export default ShowChild