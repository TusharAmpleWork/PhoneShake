import React, { useState } from "react";
import { TouchableOpacity,ScrollView, Text,View, StyleSheet, FlatList, Image, Modal, Button } from 'react-native';
import { scale } from "react-native-size-matters";
import { s, verticalScale, vs } from "react-native-size-matters/extend";
import { themeDefault } from "../../themes";

const ModalPicker=({onRequestClose})=>{
    const[modalVisible,setmodalVisible]=useState(false)
    return(
        <View style={styles.container } >
<Modal
animationType="slide"
transparent={true}
visible={modalVisible}
onRequestClose={onRequestClose}
>
<Text>{"Social Media Links"}</Text>
<Button  title="press me" onPress={()=>setmodalVisible(!modalVisible)} ></Button>
</Modal>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    }
})

export default ModalPicker;
