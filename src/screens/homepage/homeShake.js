import React from "react";
import { View,Text, Image} from 'react-native';
import { s,vs, scale, verticalScale } from 'react-native-size-matters/extend'
import Icon from "react-native-vector-icons/Ionicons"
import { Heading } from "../../components/text";
import styles from "./styles";
// import SearchBar from "../../components/headerSearchBar";
// import BottomTab from '../../navigation/tab/bototm'


const HomeShake=()=>{
    return(
<View style={styles.wholePage}>
            
            <View style={styles.subView}>
<Image source={require('../../assets/images/cellPhone.png')} style={styles.imageStyle} />
<Heading title={"Shake your phone with someone,"} 
headStyle={{marginTop:s(20)}} />

<Heading title={"like you'd shake hands!"}
headStyle={{marginTop:s(0)}} />
{/* <Text style={{marginTop:scale(25),fontSize:20,fontWeight:'500'}}>{"Shake your phone with someone,"}</Text>
<Text style={{fontSize:20,fontWeight:'500'}}>{"like you'd shake hands!"}</Text> */}
</View>

        </View>
    )
}
export default HomeShake;