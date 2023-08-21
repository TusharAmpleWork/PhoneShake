import {StyleSheet, Dimensions} from 'react-native';
import {s, vs, ScaledSheet, ms} from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';
const {height, width} = Dimensions.get('window');

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
  BtnTitle: {
    fontSize: vs(16),
    textAlign: 'center',
    //margin:vs(12),
    letterSpacing: ms(0.02),
    //  lineHeight:ms(19),
    color: themeDefault.colors.white,
    //  padding:ms(11),
    fontWeight: 'bold',
  },
  t11: {
    fontSize: s(16),
    textAlign: 'center',
    margin: s(10),
    letterSpacing: ms(0.02),
    lineHeight: ms(19),
    color: themeDefault.colors.white,
    padding: ms(8),
  },
  Secondarybtn: {
    fontSize: s(14),
    color: themeDefault.colors.primaryColor,
    textAlign: 'center',
    marginTop: 1,
    height: vs(36),
    //width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
    //marginLeft:s(45)
  },
  emailbtnText: {
    fontSize: s(14),
    color: themeDefault.colors.primaryColor,
    textAlign: 'center',
    height: vs(20),
    width: s(250),
    //marginLeft:s(45),
  },
  checkbtn: {
    fontSize: s(16),
    //lineHeight:s(19),
    color: themeDefault.colors.white,
    textAlign: 'center',
    backgroundColor: themeDefault.colors.primaryColor,
    height: s(45),
    width: s(285),
    //marginRight:s(40),
    //marginLeft:s(30),
    borderRadius: s(5),
    //padding:ms(10),
    marginTop: s(30),
    fontWeight: '500',
  },
  topbtn: {
    backgroundColor: themeDefault.colors.primaryColor,
    height: vs(29),
    width: s(29),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: s(12),
  },
  btnview: {
    flex: 1,
    height: vs(28),
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: themeDefault.colors.white,
  },
  numb: {
    color: themeDefault.colors.white,
    //textAlign:'center',
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
  button:{
height:s(28),
width:vs(70),
borderRadius:vs(5),
backgroundColor:themeDefault.colors.white,
borderColor:themeDefault.colors.pink,
borderWidth:1,
justifyContent:'center',
alignItems:'center'
 
  },
  buttonText:{
    fontSize:s(12),
    letterSpacing:vs(0.04),
    lineHeight:vs(14),
    color:themeDefault.colors.pink,
    fontWeight:'500'
   

  }
});

export default styles;
