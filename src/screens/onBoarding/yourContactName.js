import React, {useState, useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import {Heading} from '@text';
import Tinput from '@textInput';
import {Button} from '@button';
import SubHead from '@subText';
import HeaderComponent from '@headerComp';
import {isValidName} from '@helper';
import {setStorage} from '@storage';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const ContactName = ({navigation}) => {
  const goPrivacy = () => {
    if (name && isValidName(name)) {
      setStorage('name', name);
      console.log(name);
      navigation.navigate('Privacyp');
    } else {
      Alert.alert('enter valid username');
    }
  };
  const [state, setState] = useState({
    name: '',
    show: true,
    txtColor: false,
  });
  const {name} = state;
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      name: value,
    }));
  };
  const PreviousScreen = () => {
    navigation.goBack();
  };
  const NextScreen = () => {
    navigation.push('Privacy');
  };
  return (
    <View style={styles.container}>
      <HeaderComponent onBack={PreviousScreen} />

      <Heading title={'Choose a @Handle,'} TopheadStyle={{marginTop: vs(17)}} />
      <Heading
        title={'your unique name for sharing'}
        headStyle={{marginTop: 0}}
      />
      <Heading title={'your contact with anyone'} headStyle={{marginTop: 0}} />

      <Tinput placeholder={'@Handle'} onChangeText={handleChange} />
      <SubHead title={'phoneshake.me/@'} />
      <Button
        title={'Continue'}
        onPress={goPrivacy}
        disabled={state.name.trim().length > 0 ? false : true}
        textStyle={
          state.name.trim().length > 0 ? styles.finalState : styles.initialState
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
  finalState: {
    backgroundColor: themeDefault.colors.primaryColor,
    fontWeight: 'bold',
    marginTop: vs(45),
    //#208efb80
  },
  initialState: {
    backgroundColor: themeDefault.colors.lightBlue,
    fontWeight: 'bold',
    marginTop: vs(45),
  },
});

export default ContactName;
