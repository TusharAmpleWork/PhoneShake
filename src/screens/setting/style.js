import {StyleSheet, Dimensions} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  titleview: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firsthead: {
    fontWeight: '500',
  },
  secondhead: {
    marginTop: 0,
    fontWeight: '500',
  },
  butn: {
    marginTop: 20,
  },
  mobileInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: s(65),
    marginBottom: 10,
  },
  inputSubText: {
    marginTop: s(6),
    height: vs(21),
    width: s(80),
    color: '#208EFB',
    fontSize: s(17),
  },
  subInput: {
    marginTop: s(0),
    height: vs(38),
    width: s(150),
    marginLeft: s(3),
    fontSize: s(16),
    fontWeight: '500',
    color: '#000000',
  },
  chkbtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  chktext: {
    fontSize: s(16),
    //lineHeight:s(19),
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#208EFB',

    //marginRight:s(40),
    //marginLeft:s(30),
    borderRadius: s(5),
    //padding:moderates(10),

    fontWeight: '500',
  },
  mainView: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  firstStyle: {
    height: s(200),
    width: vs(200),
  },
  second: {
    height: s(60),
    width: s(60),
  },
  profile: {
    backgroundColor: themeDefault.colors.offWhite,
    height: height / 3,
  },
  image: {
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: vs(50),
  },
  personImg: {
    width: s(100),
    height: s(100),
    borderRadius: 100 / 2,
    //   width:width*0.22,
    //   height:height*0.13,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: s(55),
  },
  settingsIconStyle: {height: s(21), width: s(21), marginTop: vs(37)},
  settingIcon: {marginHorizontal: s(21), alignItems: 'flex-end'},
  logo: {
    backgroundColor: 'orange',
    borderRadius: 25 / 2,
    width: s(25),
    height: s(25),
    marginTop: s(-30),
    marginLeft: s(60),
  },
  logoText: {
    flex: 1,
    alignItems: 'center',
    fontSize: s(10),
    justifyContent: 'center',
  },
  profileData: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  borderStyle: {
    borderBottomWidth: 0.7,
    borderColor: '#CCCCCC',
    marginTop: 10,
  },
  socialMediaLinks: {
    height: 70,
    width: 70,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: s(16),
  },
  iconStyle: {fontSize: s(56)},

  textName: {
    fontSize: s(20),
    marginTop: s(0),
  },
  textStyle: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 0,
  },
  allIconStyle: {
    marginHorizontal: s(126),
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  cmpnyName: {
    fontSize: 12,
    color: '#7F7F7F',
    marginTop: 3,
  },
  socialLogo: {
    height: 35,
    width: 35,
  },
  logoTextt: {
    width: '100%',
    height: s(12),
    marginLeft: s(35),
  },
  logoView: {
    flex: 1,
    flexWrap:'wrap',
    flexDirection: 'row',
  },
  wholeView: {
    backgroundColor: 'skyblue',
    height: 250,
    width: '100%',
  },
  wholeLinks: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginLeft: s(18),
    marginTop: s(16),
    width: '100%',
  },
  linksWrap: {
    flex: 1,
    flexDirection: 'column',
  },
  desc: {
    fontSize: 14,
    marginTop: 5,
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
  },
  desc1: {
    fontSize: 14,
    marginTop: 0,
    width: '100%',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: s(0),
  },
});
export default styles;
