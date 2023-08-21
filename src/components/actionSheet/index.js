import React,{useRef} from "react";
import {View,Text,TouchableOpacity, Alert } from 'react-native';
import ActionSheet from "@alessiocancian/react-native-actionsheet";

const Action=({onPress,title})=>{
    let actionSheet=useRef()
    let optionArray=['Remove','cancel']
    const showActionSheet=()=>{
    actionSheet.current.show();
    }
    
   return(
    <View>
<TouchableOpacity onPress={onPress} >
    <Text>{title}</Text>
{/* <ActionSheet
ref={actionSheet}
title={'Remove Email'}
message={'are you sure wants to remove email'}
options={optionArray}
destructiveButtonIndex={0}
onPress={()=>optionArray}
/> */}
</TouchableOpacity>

    </View>
   )
    
    
}
export default Action;