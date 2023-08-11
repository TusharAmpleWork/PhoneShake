import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {Heading} from '../../components/text';
import Tinput from '../../components/textInput';
import styles from './style';
import {ContinueBtn} from '../../components/button';
import SubHead from '../../components/subText';
import HeaderComponent from '../../components/headerComp';
import {vs} from 'react-native-size-matters/extend';

const ContactName = ({navigation}) => {
  const goPrivacy = () => {
    navigation.navigate('Privacy');
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
    navigation.push('Privacy');
  };
  return (
    <View style={styles.wholepage}>
      <HeaderComponent onBack={PreviousScreen} />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Heading
          title={'Choose a @Handle,'}
          TopheadStyle={{marginTop: vs(17)}}
        />
        <Heading
          title={'your unique name for sharing'}
          headStyle={{marginTop: 0}}
        />
        <Heading
          title={'your contact with anyone'}
          headStyle={{marginTop: 0}}
        />
      </View>
      <Tinput placeholder={'@Handle'} onChangeText={handleChange} />
      <SubHead title={'phoneshake.me/@'} />
      <ContinueBtn
        title={'Continue'}
        onPress={goPrivacy}
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

export default ContactName;
