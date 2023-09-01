import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Input} from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBtn, LoginBtn, Button} from '@button';
import SubHead from '@subText';
import {Heading} from '@text';
import Tinput from '@textInput';
import {s, vs, ScaledSheet, ms} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';

const Sharescrn = ({navigation}) => {
  const [change, setChange] = useState(true);
  const [state, setState] = useState({
    number: '',

    // btnColor: false,
    // txtColor: false,
  });
  const {number} = state;
  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Heading title={'Share my'} />
        <Heading title={'PhoneShake Contact'} headStyle={{marginTop: 0}} />
      </View>
      <LoginBtn
        title={change ? 'use email instead' : 'use phone instead'}
        innerTextStyle={styles.textbutton}
        onPress={() => setChange(!change)}
      />
      {change ? (
        <View style={styles.textinput}>
          <Text style={styles.text}>{'IND+91'}</Text>
          <TextInput
            value={number}
            style={styles.input}
            placeholder={'Mobile Number'}
            keyboardType="phone-pad"
            onChangeText={handleChange}
          />
        </View>
      ) : (
        <Tinput defaultValue={'steve.nash@gmail.com'} />
      )}

      <SubHead
        title={
          change
            ? "We'll send a SMS invite with your contact"
            : "We'll send an email invite with your contact"
        }
      />
      <Button title={'Share my contact'} textStyle={styles.chkbtn} />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  title: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainTitle: {
    fontWeight: '500',
  },
  subTitle: {
    marginTop: 0,
    fontWeight: '500',
  },
  textbutton: {
    marginTop: vs(20),
  },
  textinput: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: s(65),
    marginBottom: s(10),
  },
  text: {
    marginTop: s(12),
    height: vs(21),
    width: s(80),
    color: themeDefault.colors.primaryColor,
    fontSize: s(17),
  },
  input: {
    marginTop: s(0),
    height: vs(38),
    width: s(150),
    marginLeft: s(3),
    fontSize: s(16),
    fontWeight: '500',
    color: themeDefault.colors.black,
  },
  inputSubText: {
    marginTop: vs(6),
    height: vs(21),
    width: s(80),
    color: '#208EFB',
    fontSize: s(17),
  },
  chkbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: s(16),
    marginTop: vs(23),
  },
  chktext: {
    fontSize: s(16),
    //lineHeight:scale(19),
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#208EFB',

    //marginRight:scale(40),
    //marginLeft:scale(30),
    borderRadius: ms(5),
    //padding:moderateScale(10),

    fontWeight: '500',
  },
});
export default Sharescrn;
