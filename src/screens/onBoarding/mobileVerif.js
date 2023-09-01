import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import {Button, LoginBtn} from '@button';
import {Heading, SubHeading} from '@text';
import {isValidPhone} from '@helper';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const MobileVerf = ({navigation}) => {
  const [state, setState] = useState({
    number: '',

    // btnColor: false,
    // txtColor: false,
  });
  const {number} = state;
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };

  const goToConfmCode = () => {
    if (number && isValidPhone(number)) {
      navigation.navigate('ConfirmCode');
    } else {
      Alert.alert('Enter correct mobile number');
    }
  };
  const goToEmailVerf = () => navigation.navigate('EmailVerf');
  return (
    <View style={styles.container}>
      <Heading title={"What's your"} />
      <Heading title={'mobile number?'} headStyle={{marginTop: 0}} />

      <SubHeading title={'Use email instead'} onPress={goToEmailVerf} />

      <View style={styles.textinput}>
        <Text style={styles.text}>{'IND+91'}</Text>
        <TextInput
          value={number}
          style={styles.input}
          placeholder={'Mobile Number'}
          keyboardType="phone-pad"
          onChangeText={handleChange}
        />
      </View>
      <Text style={styles.belowTextInput}>
        {"we'll send you an SMS verification code"}
      </Text>
      <Button
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
const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: themeDefault.colors.white},
  textinput: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: s(65),
    marginBottom: s(10),
  },
  text: {
    marginTop: s(12),
    height: vs(21),
    width: s(80),
    color: themeDefault.colors.primaryColor,
    fontSize: s(17),
  },
  input: {
    marginTop: s(0),
    height: vs(38),
    width: s(150),
    marginLeft: s(3),
    fontSize: s(16),
    fontWeight: '500',
    color: themeDefault.colors.black,
  },
  belowTextInput: {
    marginTop: s(1),
    fontSize: s(12),
    marginLeft: vs(70),
    color: themeDefault.colors.lightGrey,
    height: s(44),
    fontWeight: '500',
    width: s(400),
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
export default MobileVerf;
