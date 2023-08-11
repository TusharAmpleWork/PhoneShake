import {StyleSheet, Dimensions} from 'react-native';
import {
  scale,
  moderateScale,
  s,
  vs,
  ScaledSheet,
  ms,
} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';
const {height, width} = Dimensions.get('window');
const styles = ScaledSheet.create({
  headView: {
    //marginTop:vs(74),
    justifyContent: 'center',
    alignItems: 'center',
    height: s(48),
  },
  headText: {
    marginTop: vs(45),
    fontSize: s(20),
    color: themeDefault.colors.black,
    fontWeight: '500',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: ms(24),
    fontFamily: themeDefault.fonts.SFNSTextMedium,
  },
  textIcon:{

  },
  textStyle: {
    fontSize: s(14),
    textAlign: 'center',
    color: themeDefault.colors.primaryColor,
    fontWeight: '500',
    marginTop: vs(15),
  },
  sectionTitle: {
    fontSize: scale(12),
    color: '#A8A8A8',
    fontWeight: '500',
    marginLeft: 12,
    marginTop: moderateScale(12),
    justifyContent: 'space-between',
  },
  subSection: {
    height: height / 13,
    width: width,
    flexDirection: 'row',
  },
  subSectionTitle: {
    fontSize: scale(16),
    color: '#000000',
    fontWeight: '400',
    marginLeft: scale(16),
    marginTop: 15,
  },
  subSectionView: {
    flexDirection: 'row',
    marginTop: 17,
    flex: 1,
    justifyContent: 'flex-end',
  },
  subText: {
    fontSize: scale(14),
    color: '#A8A8A8',
    fontWeight: '400',
    marginRight: scale(8),
  },
  icon: {
    fontSize: scale(14),
    color: '#A8A8A8',
    marginRight: scale(14),
    marginTop: scale(2),
  },
  subIcon: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    color: '#A8A8A8',
    height: height / 40,
    width: width,
  },
  mainHeading: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: s(30),
    fontFamily: themeDefault.fonts.SFNSDisplayRegular,
  }
});

export default styles;
