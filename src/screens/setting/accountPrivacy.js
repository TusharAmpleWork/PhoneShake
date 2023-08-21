import React, {useState,useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import ActionSheet from "@alessiocancian/react-native-actionsheet";
import {s, vs} from 'react-native-size-matters/extend';
import Action from '../../components/actionSheet';
import {BlockBtn} from '../../components/button';
import HeaderComponent from '../../components/headerComp';
import SwitchButton from '../../components/switch';
import {Heading, Section, SubHeading, SubSection} from '../../components/text';
import {themeDefault} from '../../themes';

const AccountPrivacy = ({navigation, ...props}) => {
  let actionSheet=useRef()
  let optionArray=['Unblock','cancel']
  const goBack = () => navigation.goBack();
  const [contact, setContact] = useState(false);
  const [contactAccepted, setContactAccepted] = useState(false);
  const [contactAdded, setContactAdded] = useState(false);
  const toggleContact = () => setContact(!contact);
  const toggleContactAccepted = () => setContactAccepted(!contactAccepted);
  const toggleContactAdded = () => setContactAdded(!contactAdded);
  const {id} = props.route.params;
  switch (id) {
    case 0:
      return (
        <View style={styles.container}>
          <HeaderComponent leftText={'Cancel'} onPressSkip rightText={'Done'} />
          <Heading title={'Account Privacy'} headStyle={{marginTop: vs(-10)}} />
          <View style={styles.view}>
            <SubHeading title={'Private Account'} sectionStyle={styles.text} />
            <SwitchButton
              trackColor={{false: 'red', true: themeDefault.colors.green}}
              thumbColor={
                contact ? themeDefault.colors.white : themeDefault.colors.grey
              }
              onValueChange={toggleContact}
              value={contact}
            />
          </View>
          <Section
            sectionStyle={styles.paragraph}
            text={
              'When your account is private, only people you approve can add and access your contact information on Phoneshake. Contacts who have already added you to their list won’t be affected.  '
            }
          />
        </View>
      );
      break;
    case 1:
      return (
        <View style={styles.container}>
          <HeaderComponent leftText={'Cancel'} onPressSkip rightText={'Done'} />
          <Heading title={'Notifications'} headStyle={{marginTop: vs(-10)}} />
          <Section
            text={'WHEN ACCOUNT IS PRIVATE'}
            sectionStyle={styles.firstSection}
          />
          <View style={styles.view}>
            <SubHeading
              title={'You receive a Contact Request'}
              sectionStyle={styles.text}
            />
            <SwitchButton
              trackColor={{false: 'red', true: themeDefault.colors.green}}
              thumbColor={
                contact ? themeDefault.colors.white : themeDefault.colors.grey
              }
              onValueChange={toggleContact}
              value={contact}
            />
          </View>
          <View style={styles.view}>
            <SubHeading
              title={'Your Contact Request was accepted'}
              sectionStyle={styles.text}
            />
            <SwitchButton
              trackColor={{false: 'red', true: themeDefault.colors.green}}
              thumbColor={
                contactAccepted
                  ? themeDefault.colors.white
                  : themeDefault.colors.grey
              }
              onValueChange={toggleContactAccepted}
              value={contactAccepted}
            />
          </View>
          <Section
            text={'WHEN ACCOUNT IS PUBLIC'}
            sectionStyle={styles.firstSection}
          />
          <View style={styles.view}>
            <SubHeading
              title={'Your Contact was added'}
              sectionStyle={styles.text}
            />
            <SwitchButton
              trackColor={{false: 'red', true: themeDefault.colors.green}}
              thumbColor={
                contactAdded
                  ? themeDefault.colors.white
                  : themeDefault.colors.grey
              }
              onValueChange={toggleContactAdded}
              value={contactAdded}
            />
          </View>
        </View>
      );
      break;
    case 2:
      return (
        <View style={styles.container}>
          <HeaderComponent leftText={'Cancel'} onPressSkip rightText={'Done'} />
          <Heading
            title={'Blocked Contacts'}
            headStyle={{marginTop: vs(-10)}}
          />
          <View style={styles.contact}>
            <View style={styles.image}></View>
            <View style={styles.blockedName}>
              <SubHeading title={'Nathen Peters'} sectionStyle={styles.name} />
              <Section text={'@npeters'} sectionStyle={styles.signupname} />
            </View>
            <View style={styles.button}>
              <BlockBtn onPress={()=>actionSheet.current.show()} />
              <ActionSheet
ref={actionSheet}
title={'Unblock'}
message={'Are you sure you want to unblock this contact?'}
options={optionArray}
destructiveButtonIndex={0}
onPress={()=>optionArray}
//onPress={handlePress}
/>
            </View>
          </View>
          
          <Heading
            title={'You have not blocked'}
            headStyle={{marginTop: vs(110)}}
          />
          <Heading
            title={'any of your contacts'}
            headStyle={{marginTop: vs(0)}}
          />
          <Section
            text={'When you do, they will show up here'}
            sectionStyle={styles.contacts}
          />
        </View>
      );
      break;
    default:
      return <Heading title={'not present'} />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  text: {
    fontSize: s(16),
    color: themeDefault.colors.black,
    marginTop: s(8),
    fontFamily: themeDefault.fonts.SFNSTextRegular,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(15),
  },
  paragraph: {
    marginTop: vs(20),
  },
  firstSection: {
    marginTop: vs(20),
    marginBottom: vs(19),
  },
  contacts: {
    alignItems: 'center',
  },
  contact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: vs(10),
    backgroundColor: 'skyblue',
  },
  image: {
    height: vs(45),
    width: vs(45),
    borderRadius: vs(45 / 2),
    backgroundColor: themeDefault.colors.grey,
    marginTop: vs(12),
    marginHorizontal: vs(10),
  },
  name: {
    fontSize: s(16),
    color: themeDefault.colors.black,
    lineHeight: vs(22),
  },
  blockedName: {
    flexDirection: 'column',
    alignItems: 'center',
    //backgroundColor:'skyblue'
    //marginTop:vs(-10)
  },
  signupname: {
    marginTop: vs(-11),
    alignSelf: 'flex-start',
    marginLeft: s(0),
  },
  button: {
    justifyContent: 'flex-end',
    marginBottom: vs(13),
  },
});

export default AccountPrivacy;
