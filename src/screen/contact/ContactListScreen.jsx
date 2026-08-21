import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { users } from './userContactList'
import Contactitem from '../../components/Contactitem'
import { Styleslist } from './Stylelist'

const ContactListScreen = () => {
    // fnc for render list ..
    const renderItems = ({ item }) => <Contactitem
        name={item.name}
        email={item.email}
    />
    return (
        <FlatList
            // the user data.
            data={users}
            // renderItem values
            renderItem={renderItems}
            // fetch the ID
            keyExtractor={(item) => item.id}
            // implement the CSS..
            contentContainerStyle={Styleslist.list}
            // show heading
            ListHeaderComponent={<Text style={Styleslist.heading}>Contacts</Text>}

        />
    )
}

export default ContactListScreen;