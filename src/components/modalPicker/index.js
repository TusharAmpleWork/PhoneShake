import React, { useState } from "react";
import { TouchableOpacity,ScrollView, Text,View, StyleSheet, FlatList, Image } from 'react-native';
import { scale } from "react-native-size-matters";
import { s, verticalScale, vs } from "react-native-size-matters/extend";
import { themeDefault } from "../../themes";

const ModalPicker=(props)=>{
    const onPressItem=(option)=>{
props.changeModalVisibility(false)
props.setData(option)
    }


   
    //const OPTIONS=['red','blue','green','yellow','orange']
    const OPTIONS=[
    [<Image source={require('../../assets/images/Navigate.png')} /> ,'location'] ,
    [<Image source={require('../../assets/images/twitter.png')} />,'twitter']
    ]
    const option=OPTIONS.map((item,index)=>{
        return(
            <View style={styles.modal }>
            <TouchableOpacity onPress={()=>onPressItem(item)}
            style={styles.button} key={index}
            >
                
                <Text style={styles.text} >{item}</Text>
            </TouchableOpacity>
            </View>
        )
    })
    return(
        <View style={styles.modal } >
            <TouchableOpacity style={styles.button}
  onPress={()=>props.changeModalVisibility(false)}
            >
                <FlatList data={OPTIONS}
                renderItem={({item})=>(
                   <Text>{item}</Text>
                )}
                />
{/* <ScrollView>
    {option}
</ScrollView> */}

            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    modal:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: s(100),
        width:s(250),
        marginRight: vs(60),
        marginBottom: vs(35),
      
    },
    button:{
        height:150,
    backgroundColor: themeDefault.colors.offWhite,
    marginRight: vs(50),
    justifyContent: 'center',
    marginBottom: vs(10),
    marginTop:50,
    alignItems: 'center',
    
    },
    text:{
       textAlign:"center",
        height:s(100),
        width:vs(150),
        fontSize:s(20)
    }
})
export default ModalPicker;