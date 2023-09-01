import React from 'react';
import {Text, View} from 'react-native';
import {s, ScaledSheet, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';

const SubHead = ({title, subStyle, subHad}) => {
  return (
    <View style={[styles.subHead, subHad]}>
      <Text style={[styles.subText, subStyle]}>{title}</Text>
    </View>
  );
};
const styles = ScaledSheet.create({
  subHead: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subText: {
    fontSize: s(12),
    color: themeDefault.colors.lightGrey,
    marginTop: vs(9),
    fontWeight: '500',
    lineHeight: vs(14),
    fontFamily: themeDefault.fonts.SFNSTextRegular,
  },
});
export default SubHead;
