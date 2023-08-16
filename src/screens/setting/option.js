import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  s,
  vs,
} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/AntDesign';
import HeaderComponent from '../../components/headerComp';
import {Heading, Icons, Section, SubSection} from '../../components/text';
import styles from './style';

const {height, width} = Dimensions.get('window');
const Settings = ({navigation}) => {
  const goToBack = () => navigation.goBack();
  // const goToName=()=>navigation.navigate('profile')
  return (
    <View style={styles.mainView}>
      <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop:s(-46)}} >
        <HeaderComponent onBack={goToBack}  />
        <Heading title={'Options'} headStyle={{marginTop: s(-10)}} />
        </View>
        <View style={styles.borderStyle}></View>
        <Section text={'PROFILE'} />
        <SubSection
          text={'Name'}
          name={'steve nash'}
          onPress={() => navigation.navigate('profile', {id:0})}
        />
        <SubSection text={'Handle'} name={'@snash'} />
        <SubSection
          text={'Organization'}
          name={'Alphabet Inc.'}
          onPress={() =>
            navigation.navigate('profile', {id:1})
          }
        />
        <SubSection
          text={'Position'}
          name={'Engineering Manager'}
          onPress={() => navigation.navigate('profile', {id:2})}
        />
        <SubSection text={'Bio'} name={'steve nash'} 
        onPress={() => navigation.navigate('profile', {id:3})}
        />
        <Section text={'LINKED ACCOUNTS'} />
        <SubSection text={'Linked Accounts'} />
        <Section text={'CONTACT INFORMATION'} />
        <SubSection text={'Mobile Number'} name={'+1 802-283-2910'} 
        onPress={() => navigation.navigate('profile', {id:4})}
        />
        <SubSection text={'Email'} 
         onPress={() => navigation.navigate('profile', {id:5})}
        />
        <SubSection text={'Landline/Desk'}
        onPress={() => navigation.navigate('profile', {id:6})}
        />
        <SubSection text={'Fax'}
         onPress={() => navigation.navigate('profile', {id:7})}
        />
        <SubSection text={'Address'} />
        <Section text={'ACCOUNT INFORMATION'} />
        <SubSection text={'Signup Info'} name={'+1 802-283-2910'} />
        <SubSection text={'Privacy'} />
        <SubSection text={'Notifications'} />
        <SubSection text={'Blocked Contacts'} />
        <SubSection text={'Logout'} />
        <Section
          text={'Privacy Policy and Terms Of Service'}
          sectionStyle={styles.textStyle}
        />
        <View style={styles.allIconStyle}>
          <Icons icon="twitter" style={styles.iconStyle} />
          <Icons icon2="sc-facebook" style={styles.iconStyle} />
          <Icons icon3="instagram" style={styles.iconStyle} />
        </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Settings;
