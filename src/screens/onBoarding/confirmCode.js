import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {LoginBtn, Button, CheckBtn} from '@button';
import SubHead from '@subText';
import {Heading, SubHeading} from '@text';
import Textinput from '@textInput';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';

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
    <View style={styles.container}>
      <Heading title={'Please enter'} />
      <Heading title={'the confirmation code'} headStyle={{marginTop: 0}} />
      <SubHeading title={'Did not recieve code'} />
      <View style={{marginTop: 0}}>
        <Textinput placeholder="Enter code" onChangeText={handleChange} />
      </View>
      <SubHead title={'Enter the confirmation code sent to you'} />
      <Button
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
export default ConfirmCode;
