import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Secondclasscomponent extends Component {

    // jese hum functional react native me useState use karta ha wese he class base component me hum constructor use karta ha or is kiya under usestate use karta ha.. 
    // ye constructor sub se phela call hota ha component render hona se phela ..
    constructor() {
        super();
        this.state = {
            myName: 'Shaharyar',
        }
    }
    updateName = () => {
        this.setState({ myName: 'Ali' })
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20 }}>Name: {this.state.myName}</Text>
                {/*Get the props of age value*/}
                <Text style={{ fontSize: 20 }}>Age:{this.props.data}</Text>
                <Button title='Update Name' onPress={this.updateName} />
            </View>
        )
    }
}