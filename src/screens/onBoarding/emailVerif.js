import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {EmailBtn, ContinueBtn, LoginBtn} from '../../components/button';
import SubHead from '../../components/subText';
import {Heading, SubHeading} from '../../components/text';
import Tinput from '../../components/textInput';
import styles from './style';
const EmailVerf = ({navigation}) => {
  const [state, setState] = useState({
    number: '',
    // btnColor: false,
    // txtColor: false,
  });

  const goToMobileVerf = () => {
    navigation.navigate('MobileVerf');
  };
  const goToConfmCode = () => {
    navigation.navigate('ConfirmCode');
  };
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };
  return (
    <View style={styles.wholepage}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Heading title={"What's your email?"} />
        <SubHeading title={'Use phone instead'} onPress={goToMobileVerf} />
      </View>
      <View style={{marginTop: 0}}>
        <Tinput placeholder={"Email Address"} onChangeText={handleChange} />
      </View>
      <SubHead title={"we'll send you an EMAIL verification code"} />
      <ContinueBtn
        title={'Continue'}
        onPress={goToConfmCode}
        disabled={state.number.trim().length > 0 ? false : true}
        textStyle={
          state.number.trim().length > 0
            ? styles.finalStateColor
            : styles.initialStateColor
        }
      />
    </View>
  );
};
export default EmailVerf;
