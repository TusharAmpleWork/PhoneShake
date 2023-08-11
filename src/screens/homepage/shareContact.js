import React ,{useState} from "react";
import { Text, View,StyleSheet,TextInput } from 'react-native'
import { Input } from "react-native-elements";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { CheckBtn, LoginBtn } from "../../components/button";
import SubHead from "../../components/subText";
import { Heading } from "../../components/text";
import Tinput from "../../components/textInput";
import styles from "./styles";

const Sharescrn=({navigation})=>{
    const [number, setNumber] = useState('');
    const[change,setChange]=useState(true)

return(
<View style={styles.wholePage}>
    <View style={styles.titleview}>
    <Heading title={'Share my'}
     headStyle={styles.mainTitle}
    />
    <Heading title={'PhoneShake Contact'}
    headStyle={styles.subTitle}
    />
    </View>
    <LoginBtn title={change?"use email instead":"use phone instead"} 
    innerTextStyle={styles.butn}
    onPress={() =>setChange(!change)} />
    {change? <View style={styles.mobileInput}>
      
      <Text style={styles.inputSubText}>IND+91</Text>
      <TextInput
    defaultValue={number}
          style={styles.subInput}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          onChangeText={x => setNumber(x)}
        />
   </View>: <Tinput defaultValue={'steve.nash@gmail.com'} />}
   
    <SubHead title={change?"We'll send a SMS invite with your contact":"We'll send an email invite with your contact"} />
    <CheckBtn title={"Share my contact"}
    textStyle={styles.chkbtn}
    txtStyle={styles.chktext}

    />
</View>
)
}
export default Sharescrn