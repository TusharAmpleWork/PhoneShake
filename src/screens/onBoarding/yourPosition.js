import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Button} from '@button';
import HeaderComponent from '@headerComp';
import SubHead from '@subText';
import {Heading} from '@text';
import Textinput from '@textInput';
import {isValidName} from '@helper';
import {setStorage} from '@storage';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const YourPosition = ({navigation}) => {
  const goToContactName = () => {
    if (name && isValidName(name)) {
      setStorage('name', name);
      //console.log(name);
      navigation.navigate('ContactName');
    } else {
      alert('Please enter a valid position name');
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
    navigation.push('Privacyp');
  };

  return (
    <View style={styles.container}>
      <HeaderComponent onBack={PreviousScreen} onPressSkip={NextScreen} />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Heading title={"What's your"} TopheadStyle={{marginTop: vs(17)}} />
        <Heading title={'position/designation?'} headStyle={{marginTop: 0}} />
      </View>
      <Textinput placeholder={'Position'} onChangeText={handleChange} />
      <SubHead title={'Add your occupation title'} />
      <Button
        title={'Continue'}
        onPress={goToContactName}
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

export default YourPosition;
