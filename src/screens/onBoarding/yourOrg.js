import React, {useState, useEffect} from 'react';
import {Alert, View} from 'react-native';
import {Button} from '@button';
import HeaderComponent from '@headerComp';
import SubHead from '@subText';
import {Heading} from '@text';
import Textinput from '@textInput';
import {setStorage} from '@storage';
import {isValidName} from '@helper';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const OrgCheck = ({navigation}) => {
  const YourPostn = () => {
    if (name && isValidName(name)) {
      navigation.navigate('YourPostn');
      setStorage('name', name);
      //console.log(name);
    } else {
      Alert.alert('Enter valid company name');
    }
  };
  const [state, setState] = useState({
    name: '',
    show: true,
    txtColor: false,
  });
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      name: value,
    }));
  };
  const {name} = state;
  const PreviousScreen = () => {
    navigation.goBack();
  };
  const NextScreen = () => {
    navigation.push('Privacyp');
  };

  return (
    <View style={styles.container}>
      <HeaderComponent onBack={PreviousScreen} onPressSkip={NextScreen} />
      <Heading title={"What's your"} TopheadStyle={{marginTop: vs(17)}} />
      <Heading title={'current organization'} headStyle={{marginTop: 0}} />
      <Textinput
        placeholder={'Organization Name'}
        onChangeText={handleChange}
      />
      <SubHead title={'Add your company/organization name'} />
      <Button
        title={'Continue'}
        onPress={YourPostn}
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

export default OrgCheck;
