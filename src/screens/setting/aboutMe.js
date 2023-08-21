import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  SafeAreaView,
  Alert,
  TextInput,
  FlatList,
} from 'react-native';
//import ContactMe from './contactme';
import {SocialMediabtn} from '../../components/button';
import styles from './style';
import {Heading} from '../../components/text';
import ModalPicker from '../../components/modalPicker';
import { themeDefault } from '../../themes';
import { s, vs } from 'react-native-size-matters/extend';

const {height, width} = Dimensions.get('window');
//'#F7F7F7'
const ContactMe = ({navigation}) => {
const options=[
  {id:1,title:"twitter"},
  {id:2,title:'facebook'},
  {id:3,title:'whatsapp'},
  {id:4,title:'linkedin'}
]

  const[modalVisible,setmodalVisible]=useState(false)
  const goToOptions = () => {
    navigation.navigate('Settings');
  };
const[myNotes,setmyNotes]=useState([])
const[myNotesArray,setmyNotesArray]=useState([])
const onSubmitPress=()=>{
  let myNotesData={
    id:new Date(),
    title:myNotes,
    details:'demo details'
  }
  setmyNotesArray([...myNotesArray,myNotesData]);
  setmodalVisible(false)
}
const renderItemList=({item})=>{
return(
  <View style={{height: vs(70),backgroundColor:'grey',
  width: s(70),
  marginRight: vs(20),
  marginBottom: vs(35),}}>
    <Text>{item.title}</Text>
  </View>
)

}
  return (
    <View style={styles.mainView}>
      <View style={styles.profile}>
        <View style={styles.settingIcon}>
          <Pressable onPress={goToOptions}>
            <Image
              source={require('../../assets/images/settingsIcon.jpeg')}
              resizeMode="contain"
              style={styles.settingsIconStyle}
            />
          </Pressable>
        </View>
        <View style={styles.image}>
          <TouchableHighlight style={styles.personImg}>
            <Text>{'Image'}</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.logo}>
            <Text style={styles.logoText}>{'Logo'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.profileData}>
          <Heading title={'Michael Cole'} headStyle={styles.textName} />
          <Heading
            title={'C0-FOUNDER AT PHONESHAKE INC.'}
            headStyle={styles.cmpnyName}
          />
        </View>
      </View>



<View style={styles.logoView}>
        <SocialMediabtn
          text={'Add'}
          onPress={()=>setmodalVisible(true)}
          image={require('../../assets/images/plusSign.png')}
         />

 <FlatList
data={myNotesArray}
renderItem={renderItemList}
/> 
        
        <View >
         <Modal 
         animationType="slide"
         transparent={true}
         visible={modalVisible}
         >
           <View style={{alignItems:'center',height:height/2, marginTop:350,backgroundColor:'skyblue'}}>
         <Text style={{fontSize:s(24),marginBottom:vs(20)}} >{"Social Media Links"}</Text>
         <View style={{height:80,width:250, fontSize:20,backgroundColor:'white',borderRadius:10}}>
        <TextInput style={{fontSize:20}}
        placeholder='enter the scocial media site'
        value={myNotes}
        onChangeText={(value)=>setmyNotes(value)}
        />
        </View>
         <TouchableOpacity onPress={onSubmitPress} style={{backgroundColor:'pink',height:50,width:100,borderRadius:10,marginTop:20}} >
          <View  >
          <Text style={{fontSize:21,textAlign:'center',justifyContent:'center',alignItems:'center',}} >{"select"}</Text>
          </View>
        </TouchableOpacity>
        {/* <FlatList data={options} 
        renderItem={({item})=>(
          <Text 
          onPress={()=>setmodalVisible(false)}
          style={{fontSize:s(24),marginBottom:vs(20),color:'black'}} >{item.title}</Text>
  )}
        /> */}
     
         {/* <TouchableOpacity onPress={()=>setmodalVisible(false)} >
          <View  >
          <Text style={{fontSize:20,}} >{"select"}</Text>
          </View>
        </TouchableOpacity> */}
<View >

           </View>
         </View>
          </Modal> 
          </View>
          
      
      </View>


      
    </View>
  );
};

export default ContactMe;
