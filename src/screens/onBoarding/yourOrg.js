import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {ContinueBtn} from '../../components/button';
import HeaderComponent from '../../components/headerComp';
import SubHead from '../../components/subText';
import {Heading} from '../../components/text';
import Textinput from '../../components/textInput';
import Tinput from '../../components/textInput';
import styles from './style';
const OrgCheck = ({navigation}) => {
  const YourPostn = () => {
    navigation.navigate('YourPostn');
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
  const PreviousScreen = () => {
    navigation.goBack();
  };
  const NextScreen = () => {
    navigation.push('Privacyp');
  };

  return (
    <View style={styles.wholepage}>
      <HeaderComponent onBack={PreviousScreen} onPressSkip={NextScreen} />
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Heading title={"What's your"} TopheadStyle={{marginTop: vs(17)}} />
        <Heading title={'current organization'} headStyle={{marginTop: 0}} />
      </View>
      <Textinput
        placeholder={'Organization Name'}
        onChangeText={handleChange}
      />
      <SubHead title={'Add your company/organization name'} />
      <ContinueBtn
        title={'Continue'}
        onPress={YourPostn}
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

export default OrgCheck;
