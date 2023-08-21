import React,{useState,useRef} from "react";
import {  StyleSheet, View } from 'react-native';
import ActionSheet from "@alessiocancian/react-native-actionsheet";
import { vs } from "react-native-size-matters/extend";
import Action from "../../components/actionSheet";
import HeaderComponent from "../../components/headerComp";
import ModalBox from "../../components/model";
import { Heading, SubSection } from "../../components/text";
import { themeDefault } from "../../themes";

const AccountInfo=({navigation})=>{
    let actionSheet=useRef()
    let accountSheet=useRef()
    let optionArray=['Delete','cancel']
    let optionList=['Remove','cancel']
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
    onPress={()=>accountSheet.current.show()}
    />
     <SubSection
    text={'Add Email or Mobile Number'}
    />
     <SubSection
    text={'Delete Account'}
    //onPress={isVisible}
    onPress={()=>actionSheet.current.show()}
    ></SubSection>
  {/* <ModalBox 
  isVisible={visible}
  closeModal={handleClose}
  /> */}
    <ActionSheet
ref={actionSheet}
title={'Delete Account'}
message={'Are you sure you want to delete your account?'}
options={optionArray}
destructiveButtonIndex={0}
onPress={()=>optionArray}
//onPress={handlePress}
/>
<ActionSheet
ref={accountSheet}
title={'Remove Mobile Number'}
message={'Are you sure you want to remove +1 802-283-2910?'}
options={optionList}
destructiveButtonIndex={0}
onPress={()=>optionList}
//onPress={handlePress}
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