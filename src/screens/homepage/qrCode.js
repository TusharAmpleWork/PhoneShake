import React,{useState} from "react";
import { Image, Text, View,Button, TouchableOpacity } from 'react-native'
import { s, scale, verticalScale, vs } from "react-native-size-matters";
import Icon from 'react-native-vector-icons/FontAwesome'
import SubHead from "../../components/subText";
import { Heading } from "../../components/text";
import { themeDefault } from "../../themes";
import styles from "./styles";


const Qrcode=({navigation})=>{
  const[first,setFirst]=useState(true)
 return(
  <View style={styles.wholePage}>
        
  <View style={styles.qr}>
     <TouchableOpacity>
           {first?<Image source={require('../../assets/images/QRcode.png')}  
          style={first?styles.initialStyle:styles.finalStyle} 
            /> :<Image source={require('../../assets/images/Robot.png')}
            style={first?styles.finalStyle:styles.initialStyle} 
             
             />}
             </TouchableOpacity>
             </View>
            
 
 <Heading title={"Steve Nash"}  
 headStyle={{marginTop:s(20)}}
 />
             {/* <Text style={{textAlign:'center',fontSize:scale(20),marginTop:scale(20),marginBottom:scale(5)}}>{"Steve Nash"}</Text> */}
             <Text style={styles.profileName}>{"@snash"}</Text>
           <View style={{alignItems:'center',marginTop:scale(35)}} >
             <TouchableOpacity  onPress={()=>setFirst(!first)} >
              {first? <Image source={require('../../assets/images/Robot.png')}
             style={styles.initialStateStyle} />
             :<Image source={require('../../assets/images/QRcode.png')}
             style={styles.finalStyle} />}
             </TouchableOpacity>
           </View>
           <SubHead title={"Share QR Code"} 
           subStyle={{textAlign:'center',fontSize:14,marginTop:50,color:themeDefault.colors.primaryColor,marginTop:20}}
           />
           
       
        
         </View>
 

        
    )
}
export default Qrcode;