import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {s, vs, ScaledSheet, ms} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
const {height, width} = Dimensions.get('window');
const Button = ({onPress, title, textStyle, disabled}) => {
  return (
    <View style={styles.buttonView}>
      <TouchableOpacity
        style={[styles.Primarybtn, textStyle]}
        activeOpacity={0.6}
        onPress={onPress}
        disabled={disabled}>
        <Text style={styles.BtnTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const LoginBtn = ({onPress, title, textStyle, innerTextStyle}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={[textStyle]}>
        <Text style={[styles.Secondarybtn, innerTextStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const AvlbBtn = ({number, onPress}) => {
  return (
    <View style={styles.btnview}>
      <TouchableOpacity
        onPress={onPress}
        style={styles.topbtn}
        activeOpacity={0.7}>
        <Text style={styles.numb}>{number}</Text>
      </TouchableOpacity>
    </View>
  );
};
//onBoarding----------------------------------------------

const SocialMediabtn = ({image, text, onPress}) => {
  return (
    <View style={styles.socialMediaBtnView}>
      <View style={styles.socialMediaBtn}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            style={{width: s(30), height: vs(30)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.btnText}>{text}</Text>
    </View>
  );
};
const BlockBtn = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <Text style={styles.buttonText}>{'Unblock'}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = ScaledSheet.create({
  Primarybtn: {
    height: vs(45),
    width: s(285),
    backgroundColor: themeDefault.colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(101),
    borderRadius: s(5),
    marginBottom: s(25),
  },
  buttonView: {justifyContent: 'center', alignItems: 'center'},
  BtnTitle: {
    fontSize: vs(16),
    textAlign: 'center',
    letterSpacing: ms(0.02),
    color: themeDefault.colors.white,
    fontWeight: 'bold',
  },
  Secondarybtn: {
    fontSize: s(14),
    color: themeDefault.colors.primaryColor,
    textAlign: 'center',
    marginTop: 1,
    height: vs(36),
    alignItems: 'center',
    justifyContent: 'center',
  },
  topbtn: {
    backgroundColor: themeDefault.colors.primaryColor,
    height: vs(29),
    width: s(29),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnview: {
    height: vs(28),
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: themeDefault.colors.white,
  },
  numb: {
    color: themeDefault.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: s(12),
    fontWeight: '800',
  },
  socialMediaBtnView: {
    height: vs(70),
    width: s(70),
    marginRight: vs(20),
    marginBottom: vs(35),
  },
  socialMediaBtn: {
    height: vs(65),
    width: s(65),
    backgroundColor: themeDefault.colors.offWhite,
    marginRight: vs(20),
    justifyContent: 'center',
    marginBottom: vs(10),
    alignItems: 'center',
  },
  btnText: {
    marginBottom: vs(6),
    fontSize: s(14),
    fontWeight: '500',
    color: themeDefault.colors.grey,
    textAlign: 'center',
  },
  button: {
    height: s(28),
    width: vs(70),
    borderRadius: vs(5),
    backgroundColor: themeDefault.colors.white,
    borderColor: themeDefault.colors.pink,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: s(12),
    letterSpacing: vs(0.04),
    lineHeight: vs(14),
    color: themeDefault.colors.pink,
    fontWeight: '500',
  },
});

export {Button, LoginBtn, AvlbBtn, SocialMediabtn, BlockBtn};
