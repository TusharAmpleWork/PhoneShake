import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
//import ContactMe from './contactme';
import {SocialMediabtn} from '../../components/button';
import styles from './style';
import {Heading} from '../../components/text';
const {height, width} = Dimensions.get('window');
//'#F7F7F7'
const ContactMe = ({navigation}) => {
  const [show, setShow] = useState(true);
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
      <View style={styles.logoView}>
        <SocialMediabtn
          text={'Add'}
          onPress={() => navigation.navigate('contactme')}
          image={require('../../assets/images/plusSign.png')}
        />
      </View>
    </View>
  );
};

export default ContactMe;
