import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '@button';
import {MainText} from '@text';
import {themeDefault} from '@themes';
import {s, ms, vs, ScaledSheet} from 'react-native-size-matters/extend';

const HomePage = ({navigation}) => {
  const goToMobileVerif = () => navigation.navigate('MobileVerf');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logoS1.png')}
      />
      <MainText title={'Welcome to'} />
      <MainText title={'Phoneshake'} />
      <View style={styles.button}>
        <Button
          title="Get Started"
          textStyle={styles.textbutton}
          onPress={goToMobileVerif}
        />

        <Text style={styles.text}>{'Phoneshake for businesses'}</Text>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  image: {
    height: vs(120),
    width: s(130),
    marginTop: ms(130),
    marginLeft: ms(125),
    marginRight: ms(127),
  },
  button: {
    justifyContent: 'flex-end',
    flex: 0.9,
  },
  textbutton: {
    justifyContent: 'center',
    height: s(55),
    width: vs(250),
    backgroundColor: themeDefault.colors.primaryColor,
    marginTop: s(70),
    borderRadius: s(5),
    marginLeft: s(45),
    marginRight: s(45),
    marginBottom: s(0),
    fontFamily: themeDefault.fonts.SFNSTextSemibold,
  },
  text: {
    backgroundColor: themeDefault.colors.white,
    textAlign: 'center',
    // marginBottom: scale(70),
    // marginTop: scale(26),
    fontSize: s(14),
    //lineHeight: scale(16),
    color: themeDefault.colors.primaryColor,
    fontWeight: '400',
    fontFamily: themeDefault.fonts.SFNSTextRegular,
    marginTop: vs(16),
  },
});

export default HomePage;
