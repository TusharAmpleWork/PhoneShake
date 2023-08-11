import {StyleSheet} from 'react-native';
import {
  moderateScale,
  s,
  scale,
  ScaledSheet,
  vs,
} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';
const styles = ScaledSheet.create({
  subHead: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  subText: {
    fontSize: s(12),
    color: themeDefault.colors.lightGrey,
    marginTop: vs(9),
    //textAlign: 'center',
    fontWeight: '500',
    lineHeight: vs(14),
    fontFamily: themeDefault.fonts.SFNSTextRegular,
  },
});
export default styles;
