import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './style';
import {ContinueBtn, LoginBtn} from '../../components/button';
import {Heading} from '../../components/text';
import {SubHeading} from '../../components/text';
import SubHead from '../../components/subText';

const MobileVerf = ({navigation}) => {
  const [state, setState] = useState({
    number: '',
    // btnColor: false,
    // txtColor: false,
  });
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };

  const goToConfmCode = () => navigation.navigate('ConfirmCode');
  const goToEmailVerf = () => navigation.navigate('EmailVerf');
  return (
    <View style={styles.mainView}>
      <Heading title={"What's your"} />
      <Heading title={'mobile number?'} headStyle={{marginTop: 0}} />

      <SubHeading title={'Use email instead'} onPress={goToEmailVerf} />

      <View style={styles.countryCode}>
        <Text style={styles.numberInput}>{'IND+91'}</Text>
        <TextInput
          value={state.number}
          style={styles.MobileNumber}
          placeholder={'Mobile Number'}
          keyboardType="phone-pad"
          onChangeText={handleChange}
        />
      </View>
      <Text style={styles.belowTextInput}>
        {"we'll send you an SMS verification code"}
      </Text>
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

export default MobileVerf;
