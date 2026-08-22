import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Secondclasscomponent from './Secondclasscomponent'


class Clascompenent extends Component {

    // we do not use the driect "return" keyword in class components 
    render() {
        // sent the props
        const age = 22;
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Class Components</Text>
                {/*Sent the props of age value*/}
                <Secondclasscomponent data={age} />
            </View>
        );
    }
}

export default Clascompenent;