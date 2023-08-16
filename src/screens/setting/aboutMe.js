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
  SafeAreaView
} from 'react-native';
//import ContactMe from './contactme';
import {SocialMediabtn} from '../../components/button';
import styles from './style';
import {Heading} from '../../components/text';
import ModalPicker from '../../components/modalPicker';
const {height, width} = Dimensions.get('window');
//'#F7F7F7'
const ContactMe = ({navigation}) => {
  const setData=(option)=>{
    setChooseData(option)
  }
const DATA=[
  {
    text:'location',
    image:require('../../assets/images/Navigate.png')
  },
  {
    text:'whatsapp',
    image:require('../../assets/images/whatsapp.png')
  }
]
let newImage=[]

 const[imageVar,setImageVar]=useState(0)
  // const [choosedata,setChooseData ] = useState('Add');
  // const [isModalVisible,setisModalVisible ] = useState(false);
  // const changeModalVisibility=(bool)=>
  // setisModalVisible(bool)
  const goToOptions = () => {
    navigation.navigate('settings');
  };
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


<SafeAreaView>
  <Image source={DATA[imageVar].image} />
  <Text>{DATA[imageVar].text}</Text>
<TouchableOpacity
onPress={()=>newImage.push(setImageVar(1),{})}
>
<Text>{'add pic'}</Text>
</TouchableOpacity>

</SafeAreaView>
      {/* <View style={styles.logoView}>
        <SocialMediabtn
        
          text={choosedata}
          onPress={() => changeModalVisibility(true)}
          image={require('../../assets/images/plusSign.png')}
        />
        <Modal
        visible={isModalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={()=>changeModalVisibility(false)}
        >
          <ModalPicker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
          />
        </Modal>
      </View> */}
    </View>
  );
};

export default ContactMe;
