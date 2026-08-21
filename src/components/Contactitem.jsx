import { View, Text } from 'react-native'
import React from 'react'
import { Styleslist } from '../screen/contact/Stylelist'

const Contactitem = ({name, email}) => {
    return (
        <View style={Styleslist.item}>
            <Text style={Styleslist.name}>{name}</Text>
            <Text style={Styleslist.email}>{email}</Text>
        </View>
    )
}

export default Contactitem