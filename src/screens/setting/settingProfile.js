import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {s, ScaledSheet, vs} from 'react-native-size-matters/extend';
import {Button} from '@button';
import {Heading} from '@text';
import HeaderComponent from '@headerComp';
import SubHead from '@subText';
import Textinput from '@textInput';
import {themeDefault} from '@themes';
import {isValidName, isValidPhone, isValidEmail} from '@helper';
import {setStorage} from '@storage';
const Profile = ({navigation, ...props}) => {
  const {id} = props.route.params;
  const [state, setState] = useState({
    name: '',
    number: '',
    email: '',
  });
  const {name, number, email} = state;
  const yourName = () => {
    if (name && isValidName(name)) {
      setStorage('name', name);
      navigation.goBack('Settings');
      //console.log(name)
    } else {
      Alert.alert('Not a valid name');
    }
  };
  const yourOrganization = () => {
    if (name && isValidName(name)) {
      setStorage('org', name);
      navigation.navigate('Settings');
    } else {
      Alert.alert('Not a valid company name');
    }
  };
  const yourPosition = () => {
    if (name && isValidName(name)) {
      setStorage('postn', name);
      navigation.goBack('Settings');
    } else {
      Alert.alert('Not a valid position name');
    }
  };
  const yourBio = () => {
    if (name && isValidName(name)) {
      setStorage('bio', name);
      navigation.goBack('Settings');
    } else {
      Alert.alert('Not a valid Bio');
    }
  };
  const yourPhoneNo = () => {
    if (number && isValidPhone(number)) {
      setStorage('phone', name);
      navigation.goBack('Settings');
    } else {
      Alert.alert('Not a Phone No');
    }
  };
  const yourEmail = () => {
    if (email && isValidEmail(email)) {
      setStorage('email', email);
      navigation.goBack('Settings');
    } else {
      Alert.alert('Not a valid email');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleName = value => {
    setState(prev => ({
      ...prev,
      name: value,
    }));
  };
  const handlePhone = value => {
    setState(prev => ({
      ...prev,
      number: value,
    }));
  };

  const handleEmail = value => {
    setState(prev => ({
      ...prev,
      email: value,
    }));
  };
  const yourTwitterHandle = () => {
    setStorage('twitter', name);
    navigation.goBack('LinkedAccounts');
    console.log(name);
  };
  const yourWebsite = () => {
    setStorage('web', name);
    navigation.goBack('LinkedAccounts');
  };
  const [textAreaCount, settextAreaCount] = useState('');
  switch (id) {
    case 0:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your name?"} headStyle={{marginTop: 0}} />

          <Textinput placeholder={'Full Name'} onChangeText={handleName} />
          <SubHead title={'Add your first and last name'} />
          <Button
            title={'Continue'}
            onPress={yourName}
            disabled={name.trim().length > 0 ? false : true}
            textStyle={
              name.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 1:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading
            title={"What's your current organization"}
            headStyle={{marginTop: 0}}
          />
          <Textinput
            placeholder={'Organization Name'}
            onChangeText={handleName}
          />
          <SubHead title={'Add your company/organization name'} />
          <Button
            title={'Continue'}
            onPress={yourOrganization}
            disabled={state.name.trim().length > 0 ? false : true}
            textStyle={
              state.name.trim().length > 0
                ? styles.finalState
                : styles.initialState
            }
          />
        </View>
      );
      break;
    case 2:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your"} headStyle={{marginTop: 0}} />
          <Heading title={'position/designation?'} headStyle={{marginTop: 0}} />
          <Textinput placeholder="Position" onChangeText={handleName} />
          <SubHead title={'Add your occupation title'} />
          <Button
            title={'Continue'}
            onPress={yourPosition}
            disabled={state.name.trim().length > 0 ? false : true}
            textStyle={
              state.name.trim().length > 0
                ? styles.finalState
                : styles.initialState
            }
          />
        </View>
      );
      break;
    case 3:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={'Your Bio'} headStyle={{marginTop: 0}} />
          <Textinput
            placeholder={'Write something about yourself...'}
            value={state.name}
            onChangeText={handleName}
            inputStyle={styles.input}
            numberOfLines={4}
            multiline={true}
            maxLength={130}
          />
          <SubHead
            title={`character limit:${name.length}/130`}
            subHad={styles.SubHead}
          />
          <Button
            title={'Continue'}
            onPress={yourBio}
            disabled={
              state.name.trim().length > 0 && state.name.trim().length < 130
                ? false
                : true
            }
            textStyle={
              state.name.trim().length > 0
                ? styles.finalState
                : styles.initialState
            }
          />
        </View>
      );
      break;
    case 4:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your"} headStyle={{marginTop: 0}} />
          <Heading title={'mobile number?'} headStyle={{marginTop: 0}} />
          <View style={styles.countryCode}>
            <Text style={styles.numberInput}>{'IND+91'}</Text>
            <TextInput
              style={styles.MobileNumber}
              placeholder={'Mobile Number'}
              keyboardType="phone-pad"
              onChangeText={handlePhone}
            />
          </View>
          <SubHead title={'Number you would like to be contacted at'} />
          <Button
            title={'Continue'}
            onPress={yourPhoneNo}
            disabled={number.trim().length > 0 ? false : true}
            textStyle={
              number.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 5:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your email"} headStyle={{marginTop: 0}} />
          <Textinput placeholder={'Email Address'} onChangeText={handleEmail} />
          <SubHead title={'Email you would like to be contacted at'} />
          <Button
            title={'Continue'}
            onPress={yourEmail}
            disabled={email.trim().length > 0 ? false : true}
            textStyle={
              email.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 6:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your"} headStyle={{marginTop: 0}} />
          <Heading title={'Landline/Desk number?'} headStyle={{marginTop: 0}} />
          <View style={styles.countryCode}>
            <Text style={styles.numberInput}>{'IND+91'}</Text>
            <TextInput
              style={styles.MobileNumber}
              placeholder={'Landline/Desk number'}
              keyboardType="phone-pad"
              onChangeText={handlePhone}
            />
          </View>
          <SubHead title={'Number you would like to be contacted at'} />
          <Button
            title={'Continue'}
            onPress={yourPhoneNo}
            disabled={number.trim().length > 0 ? false : true}
            textStyle={
              number.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 7:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your"} headStyle={{marginTop: 0}} />
          <Heading title={'Fax number?'} headStyle={{marginTop: 0}} />
          <View style={styles.countryCode}>
            <Text style={styles.numberInput}>{'IND+91'}</Text>
            <TextInput
              style={styles.MobileNumber}
              placeholder={'Fax number'}
              keyboardType="phone-pad"
              onChangeText={num => setNumber(num)}
            />
          </View>
          <SubHead title={'Fax Number you would like to be use'} />
          <Button
            title={'Continue'}
            onPress={goToOptions}
            disabled={number.trim().length > 0 ? false : true}
            textStyle={
              number.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 8:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your"} headStyle={{marginTop: 0}} />
          <Heading title={'Twitter handle?'} headStyle={{marginTop: 0}} />
          <Textinput placeholder={'@handle'} onChangeText={handleName} />
          <SubHead title={'Ex:@phoneshake'} />
          <Button
            title={'Continue'}
            onPress={yourTwitterHandle}
            disabled={name.trim().length > 0 ? false : true}
            textStyle={
              name.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
      break;
    case 9:
      return (
        <View style={styles.container}>
          <HeaderComponent onBack={handleBack} />
          <Heading title={"What's your website?"} headStyle={{marginTop: 0}} />
          <Textinput placeholder={'http://'} onChangeText={handleName} />
          <SubHead title={'Work or Personal Website'} />
          <Button
            title={'Continue'}
            onPress={yourWebsite}
            disabled={name.trim().length > 0 ? false : true}
            textStyle={
              name.trim().length > 0 ? styles.finalState : styles.initialState
            }
          />
        </View>
      );
    default:
      return <Heading title={'not present'} />;
  }
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  initialState: {
    backgroundColor: themeDefault.colors.lightBlue,
    fontWeight: 'bold',
  },
  finalState: {
    backgroundColor: themeDefault.colors.primaryColor,
    fontWeight: 'bold',
  },
  input: {
    textAlign: 'flex-start',
    fontSize: s(14),
    height: vs(85),
    width: s(285),
  },
  SubHead: {
    alignItems: 'flex-end',
    marginHorizontal: vs(44),
  },
  countryCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: s(65),
    marginBottom: s(10),
  },
  MobileNumber: {
    marginTop: s(0),
    height: vs(38),
    width: s(180),
    marginLeft: s(3),
    fontSize: s(16),
    fontWeight: '500',
    color: themeDefault.colors.black,
  },
  numberInput: {
    marginTop: vs(10),
    height: vs(21),
    width: s(80),
    color: themeDefault.colors.primaryColor,
    fontSize: s(17),
  },
});

export default Profile;
