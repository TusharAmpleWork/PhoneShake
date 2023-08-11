import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import styles from './style';
import {scale} from 'react-native-size-matters/extend';
const ContinueBtn = ({onPress, title, textStyle, disabled}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
        <Text style={[styles.Secondarybtn, innerTextStyle]}>{title} </Text>
      </TouchableOpacity>
    </View>
  );
};
const EmailBtn = ({onPress, title, textStyle, disabled}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.emailbtnText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const CheckBtn = ({onPress, title, textStyle, txtStyle}) => {
  return (
    <View style={textStyle}>
      <TouchableOpacity onPress={onPress} style={[styles.checkbtn, textStyle]}>
        <Text style={txtStyle}>{title}</Text>
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
    <View
      style={styles.socialMediaBtnView}>
      <View
        style={styles.socialMediaBtn}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={image}
            style={{width: scale(30), height: scale(30)}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <Text
        style={styles.btnText}>
        {text}
      </Text>
    </View>
  );
};

export {ContinueBtn, LoginBtn, EmailBtn, CheckBtn, AvlbBtn, SocialMediabtn};
