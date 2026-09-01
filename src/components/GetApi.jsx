import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GetApi = () => {
    const [data, setData] = useState([])
    // make sure api's is call on useEffectHook
    // useEffect(() => {
    //     // the ip we some 10.0.2.2 -- old of fetch api
    //     // fetch('http://10.0.2.2:3000/user').then((response) => {
    //     //     response.json().then((result) => {
    //     //         console.log(result);
    //     //     });
    //     // });
    //     // axios process -- in modern way to call api's
    useEffect(() => {
        axios.get('http://192.168.18.14:3000/user').then((result) => {
                console.log(result.data);
                setData(result.data);
            }).catch((error) => {
                console.log('API Error:', error.message);
            });
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Get ApI Method</Text>

            {
            data.map((item) => (
                <Text
                    key={item.id}
                    style={{ fontSize: 15, marginBottom: 10 }}
                >
                    {item.name}
                </Text>
            ))
            }
        </View>
    )
}

export default GetApi;