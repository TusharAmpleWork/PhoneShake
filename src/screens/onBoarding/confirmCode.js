import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginBtn, ContinueBtn, CheckBtn} from '../../components/button';
import SubHead from '../../components/subText';
import {Heading, SubHeading} from '../../components/text';
import Textinput from '../../components/textInput';
import styles from './style';

const ConfirmCode = ({navigation}) => {
  const Onboard = () => {
    navigation.navigate('NameCheck');
  };
  const [state, setState] = useState({
    number: '',
    show: true,
    txtColor: false,
  });
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };

  return (
    <View style={styles.wholepage}>
      <Heading title={'Please enter'} />
      <Heading title={'the confirmation code'} headStyle={{marginTop: 0}} />
      <SubHeading title={'Did not recieve code'} />
      <View style={{marginTop: 0}}>
        <Textinput placeholder="Enter code" onChangeText={handleChange} />
      </View>
      <SubHead title={'Enter the confirmation code sent to you'} />
      <ContinueBtn
        title={'Continue'}
        onPress={Onboard}
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
export default ConfirmCode;
