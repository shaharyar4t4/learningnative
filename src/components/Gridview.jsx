import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Gridview = () => {

    const data = [
    {id: 1, title: 'item 1', decription: 'this is test'},
    {id: 2, title: 'item 2', decription: 'this is test'},
    {id: 3, title: 'item 3', decription: 'this is test'},
    {id: 4, title: 'item 4', decription: 'this is test'},
    {id: 5, title: 'item 5', decription: 'this is test'},
    {id: 6, title: 'item 6', decription: 'this is test'},
    {id: 7, title: 'item 7', decription: 'this is test'},
    {id: 8, title: 'item 8', decription: 'this is test'},
    {id: 9, title: 'item 9', decription: 'this is test'},

];
  return (
    <View style={style.mainContainer}>
      <Text style={style.heading}>Gridview</Text>
      <ScrollView contentContainerStyle ={style.container}>
        {
            // need two parmeters like one is item and index refer the unique keys.
            
            // index value jab hum liyata ha jab humrhi unique idenity nhi hoti ha...
            // data.map((item, index) => (
            //     <View>
            //         <Text>{item.title}</Text>
            //     </View>
            // ))
            data.map((item) => (
                <View key={item.id} style={style.gridItem}>
                    <Text style= {style.itemText}>{item.title }</Text>
                    <Text style={style.itemDec}>{item.decription }</Text>
                </View>
            ))


        }
      </ScrollView>
    </View>
  )
}


const style = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#f8f8f8'

    },

    heading:{
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 20,
        color: '#000'
    },

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        flexWrap: 'wrap'
    },

    gridItem: {
      backgroundColor: '#ff6f61',
      padding : 20,
      marginBottom: 10,
      width: '48%',
      height: 100,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    itemDec:{
        color: '#fff',
        fontSize: 14,
        paddingTop: 5,

    }
});

export default Gridview;