import React, { useState } from 'react';
import { View,Switch } from 'react-native';

const SwitchButton=({trackColor,thumbColor,onValueChange,value})=>{
    const[isEnabled,setIsEnabled]=useState(false)
    const[state,setState]=useState({
        contactRequest:false,
        contactRequestAccepted:false,
        contactAdded:false
      })
    // const toggleSwitch=()=>setIsEnabled(...isEnabled)
    return(
        <View>
<Switch
trackColor={trackColor}
thumbColor={thumbColor}
onValueChange={onValueChange}
value={value}
/>
        </View>
    )
}
export default SwitchButton;