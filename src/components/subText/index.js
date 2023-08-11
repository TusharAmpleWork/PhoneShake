import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const SubHead = ({title, subStyle, subHad}) => {
  return (
    <View style={[styles.subHead, subHad]}>
      <Text style={[styles.subText, subStyle]}>{title}</Text>
    </View>
  );
};
export default SubHead;
