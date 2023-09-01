import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {useSelector} from 'react-redux';
import HeaderComponent from '@headerComp';
import {Heading, Icons, Section, SubSection} from '@text';
import {getStorage} from '@storage';
import {themeDefault} from '@themes';
import {useIsFocused} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const Settings = ({navigation}) => {
  const isFocussed = useIsFocused();

  useEffect(() => {}, [isFocussed]);
  const goToBack = () => navigation.goBack();
  const goToAccountInfo = () => navigation.navigate('AccountInfo');
  const goToAccountPrivacy = () => navigation.navigate('AccountPrivacy');
  const orgNameFromStore = getStorage('org');
  const nameFromStore = getStorage('name');
  const postnNameFromStore = getStorage('postn');
  const bioFromStore = getStorage('bio');
  let phoneNoFromStore = getStorage('phone');
  //phoneNoFromStore = parseInt(phoneNoFromStore);
  const emailFromStore = getStorage('email');

  const goToName = () => {
    navigation.navigate('Profile', {id: 0});
  };
  const [name, setName] = useState('');
  const nameCheck = useSelector(state => state.reducer);
  useEffect(() => {
    setName(nameCheck.length + 1);
  }, [nameCheck]);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <HeaderComponent onBack={goToBack} />
          <Heading title={'Options'} headStyle={{marginTop: s(-10)}} />
        </View>
        <View style={styles.borderStyle}></View>
        <Pressable onPress={goToName}>
          <Section text={'PROFILE'} />
          <SubSection text={'Name'} name={nameFromStore} />
        </Pressable>
        <SubSection text={'Handle'} name={'@snash'} />
        <Pressable onPress={() => navigation.navigate('Profile', {id: 1})}>
          <SubSection text={'Organization'} name={orgNameFromStore} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile', {id: 2})}>
          <SubSection text={'Position'} name={postnNameFromStore} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile', {id: 3})}>
          <SubSection text={'Bio'} name={bioFromStore} />
        </Pressable>
        <Section text={'LINKED ACCOUNTS'} />
        <Pressable onPress={() => navigation.navigate('LinkedAccounts')}>
          <SubSection text={'Linked Accounts'} />
        </Pressable>
        <Section text={'CONTACT INFORMATION'} />
        <Pressable onPress={() => navigation.navigate('Profile', {id: 4})}>
          <SubSection text={'Mobile Number'} name={phoneNoFromStore} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile', {id: 5})}>
          <SubSection text={'Email'} name={emailFromStore} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Profile', {id: 6})}>
          <SubSection text={'Landline/Desk'} />
        </Pressable>
        <SubSection
          text={'Fax'}
          onPress={() => navigation.navigate('Profile', {id: 7})}
        />
        <SubSection
          text={'Address'}
          onPress={() => navigation.navigate('Edit')}
        />
        <Section text={'ACCOUNT INFORMATION'} />
        <Pressable onPress={goToAccountInfo}>
          <SubSection text={'Signup Info'} name={'+1 802-283-2910'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AccountPrivacy', {id: 0})}>
          <SubSection text={'Privacy'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AccountPrivacy', {id: 1})}>
          <SubSection text={'Notifications'} />
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('AccountPrivacy', {id: 2})}>
          <SubSection text={'Blocked Contacts'} />
        </Pressable>
        <SubSection text={'Logout'} />
        <Section
          text={'Privacy Policy and Terms Of Service'}
          sectionStyle={styles.text}
        />
        <View style={styles.icons}>
          <Icons icon="twitter" style={styles.iconSize} />
          <Icons icon2="sc-facebook" style={styles.iconSize} />
          <Icons icon3="instagram" style={styles.iconSize} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  text: {
    marginTop: vs(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  icons: {
    marginHorizontal: s(126),
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  iconSize: {fontSize: s(56)},
});

export default Settings;
