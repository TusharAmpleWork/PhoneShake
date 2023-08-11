import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ContinueBtn} from '../../components/button';
import SubHead from '../../components/subText';
import {Heading} from '../../components/text';
import Textinput from '../../components/textInput';
import styles from './style';
const NameCheck = ({navigation}) => {
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

  const goToOrg = () => {
    navigation.navigate('OrgCheck');
  };
  return (
    <View style={styles.wholepage}>
      <Heading title={"What's your name?"} />
      <Textinput placeholder={'Full Name'} onChangeText={handleChange} />
      <SubHead title={'Add your first and last name'} />
      <ContinueBtn
        title={'Continue'}
        onPress={goToOrg}
        disabled={state.number.trim().length > 0 ? false : true}
        textStyle={
          state.number.trim().length > 0
            ? styles.finalState
            : styles.initialState
        }
      />
    </View>
  );
};

export default NameCheck;
