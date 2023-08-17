import React,{useState} from "react";
import {  StyleSheet, View } from 'react-native';
import { vs } from "react-native-size-matters/extend";
import HeaderComponent from "../../components/headerComp";
import ModalBox from "../../components/model";
import { Heading, SubSection } from "../../components/text";
import { themeDefault } from "../../themes";

const AccountInfo=({navigation})=>{
    const[visible,setVisible]=useState(false)
    const goBack=()=>navigation.goBack()
    const isVisible=()=>setVisible(true)
    const handleClose=()=>setVisible(false)
    return(
        <View style={styles.container }>
 <View>
        <HeaderComponent onBack={goBack} />
        <Heading title={"Linked Accounts"}
        headStyle={{marginTop:vs(-10)}}
        />
    </View>
    <View style={styles.border}></View>
    <SubSection
    text={'Mobile Number'}
    name={"+1 802-283-2910"}
    />
     <SubSection
    text={'Add Email or Mobile Number'}
    />
     <SubSection
    text={'Delete Account'}
    onPress={isVisible}
    ></SubSection>
  <ModalBox 
  isVisible={visible}
  closeModal={handleClose}
  />
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:themeDefault.colors.white
    },
    border:{
        borderBottomWidth: 0.7,
        borderColor: '#CCCCCC',
        marginTop: vs(10),
    }
})

export default AccountInfo;