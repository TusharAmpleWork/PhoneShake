import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '@button';
import SubHead from '@subText';
import {Heading} from '@text';
import Textinput from '@textInput';
import {isValidName} from '@helper';
import {setStorage} from '@storage';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
import {useDispatch} from 'react-redux';
import {yourName} from '../../store/onBoarding/action';
const NameCheck = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    show: true,
    txtColor: false,
    yrname: '',
  });
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      yrname: value,
    }));
  };

  const {name, yrname} = state;
  const goToOrg = () => {
    if (yrname && isValidName(yrname)) {
      navigation.navigate('OrgCheck');
      setStorage('name', yrname);
    } else {
      Alert.alert('enter valid name');
    }
    console.log(yrname);
    dispatch(yourName(yrname));
  };
  return (
    <View style={styles.container}>
      <Heading title={"What's your name?"} />
      <Textinput placeholder={'Full Name'} onChangeText={handleChange} />
      <SubHead title={'Add your first and last name'} />
      <Button
        title={'Continue'}
        onPress={() => goToOrg(yrname)}
        disabled={state.yrname.trim().length > 0 ? false : true}
        textStyle={
          state.yrname.trim().length > 0
            ? styles.finalState
            : styles.initialState
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

export default NameCheck;
