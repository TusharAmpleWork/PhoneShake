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
    justifyContent:'flex-end',
    alignItems:'center',
    //marginHorizontal:50
    
  },

  subText: {
    //backgroundColor:'pink',
    fontSize: s(12),
    color: themeDefault.colors.lightGrey,
    marginTop: vs(9),
    fontWeight: '500',
    lineHeight: vs(14),
    fontFamily: themeDefault.fonts.SFNSTextRegular,
  },
});
export default styles;
