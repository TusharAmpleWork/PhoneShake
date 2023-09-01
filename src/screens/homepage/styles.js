import {StyleSheet, Dimensions} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wholePage: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  subView: {flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:vs(80)},
  imageStyle: {height: s(75), width: s(100)},
  titleview: {
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
  butn: {
    marginTop: 20,
  },
  mobileInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: vs(65),
    marginBottom: 10,
  },
  inputSubText: {
    marginTop: vs(6),
    height: vs(21),
    width: s(80),
    color: '#208EFB',
    fontSize: s(17),
  },
  subInput: {
    marginTop: vs(0),
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
  qr:{alignItems:"center",
  marginTop:vs(75)
},
profileName:{textAlign:'center',fontSize:s(16),color:themeDefault.colors.grey,marginTop:vs(5)},
  mainView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  initialStyle: {
    height: vs(200),
    width: vs(200),
  },
  finalStyle: {
    height: vs(60),
    width: vs(60),
  },
  initialStateStyle:{height:vs(60),width:vs(60)},
  profile: {
    backgroundColor: '#F7F7F7',
    height: height / 2.7,
    width: '100%',
  },
  image: {
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: vs(55),
  },
  personImg: {
    borderRadius: (height + width) / 2,
    width: width * 0.22,
    height: height * 0.13,
    backgroundColor: '#00000033',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: vs(35),
  },
  logo: {
    backgroundColor: 'orange',
    borderRadius: (height + width) / 2,
    width: width * 0.06,
    height: height * 0.04,
    marginTop: vs(-30),
    marginLeft: s(60),
  },
  logoText: {
    alignItems: 'center',
    fontSize: 10,
    justifyContent: 'center',
  },
  profileData: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialMediaLinks: {
    height: 70,
    width: 70,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
    margin: s(16),
  },
  textName: {
    fontSize: s(20),
    marginTop: vs(0),
  },
  cmpnyName: {
    fontSize: s(12),
    color: '#7F7F7F',
    marginTop: vs(3),
  },
  socialLogo: {
    height: 35,
    width: 35,
  },
  logoTextt: {
    width: '100%',
    height: vs(12),
    marginLeft: s(35),
  },
  logoView: {
    flex: 1,
    flexDirection: 'column',
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
    marginTop: vs(16),
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
