import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, Alert} from 'react-native';
import {EmailBtn, Button, LoginBtn} from '@button';
import SubHead from '@subText';
import {Heading, SubHeading} from '@text';
import Tinput from '@textInput';
import {isValidEmail} from '@helper';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const EmailVerf = ({navigation}) => {
  const [state, setState] = useState({
    email: '',
    // btnColor: false,
    // txtColor: false,
  });
  const {email} = state;
  const goToMobileVerf = () => {
    navigation.navigate('MobileVerf');
  };
  const goToConfmCode = () => {
    if (email && isValidEmail(email)) {
      navigation.navigate('ConfirmCode');
    } else {
      Alert.alert('Enter valid email');
    }
  };
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      email: value,
    }));
  };
  return (
    <View style={styles.container}>
      <Heading title={"What's your email?"} />
      <SubHeading title={'Use phone instead'} onPress={goToMobileVerf} />
      <View style={{marginTop: 0}}>
        <Tinput placeholder={'Email Address'} onChangeText={handleChange} />
      </View>
      <SubHead title={"we'll send you an EMAIL verification code"} />
      <Button
        title={'Continue'}
        onPress={goToConfmCode}
        disabled={state.email.trim().length > 0 ? false : true}
        textStyle={
          state.email.trim().length > 0
            ? styles.finalStateColor
            : styles.initialStateColor
        }
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  finalStateColor: {
    backgroundColor: themeDefault.colors.primaryColor,
    fontWeight: 'bold',
    marginTop: vs(45),
    //#208efb80
  },
  initialStateColor: {
    backgroundColor: themeDefault.colors.lightBlue,
    fontWeight: 'bold',
    marginTop: vs(45),
  },
});
export default EmailVerf;
