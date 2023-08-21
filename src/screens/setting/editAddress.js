import React from "react";
import { StyleSheet, TextInput, View,Text } from 'react-native';
import { s,vs } from "react-native-size-matters/extend";
import HeaderComponent from "../../components/headerComp";
import { Heading } from "../../components/text";
import { themeDefault } from "../../themes";
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const Edit=()=>{
  
    return(
        <View style={styles.container } >
            <HeaderComponent text={"Cancel"} onPressSkip />
            <Heading title={'Edit Address'} 
            headStyle={{marginTop:vs(-9)}}
            />
            <View style={styles.input}>
            <EvilIcons name='search' style={styles.icon} />
            <TextInput style={styles.inputs}
            placeholder="Search Address"
            /> 
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:themeDefault.colors.white
    },
    input:{
        flexDirection:'row',
        height:s(29),
        backgroundColor:themeDefault.colors.offWhite,
        marginHorizontal:vs(12),
        marginTop:vs(15)
    },
    icon:{
        marginTop:vs(4),
        fontSize:s(20)
    },
    inputs:{
        marginHorizontal:10
    }
})
export default Edit;