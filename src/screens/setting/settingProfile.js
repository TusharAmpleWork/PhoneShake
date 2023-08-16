import React, {useEffect, useState} from 'react';
import {View, Text,TextInput, StyleSheet} from 'react-native';
import { s, vs } from 'react-native-size-matters/extend';
import {ContinueBtn} from '../../components/button';
import HeaderComponent from '../../components/headerComp';
import SubHead from '../../components/subText';
import {Heading, SubSection} from '../../components/text';
import Textinput from '../../components/textInput';
import { themeDefault } from '../../themes';
const Profile = ({navigation,...props}) => {
  const {id}=props.route.params;
  const[name,setName]=useState('')
  const[number,setNumber]=useState('')
  const goToOptions=()=> navigation.goBack()
const handleChange=(name)=>
  setName(name)
const[textAreaCount,settextAreaCount]=useState('')


switch(id){
  case 0:
    return (
    <View style={styles.container} >
<HeaderComponent onBack={goToOptions} />
    <Heading title={"What's your name?"} />
    <Textinput placeholder={"Full Name"}
     onChangeText={handleChange}
     />
     <SubHead title={"Add your first and last name"} />
     <ContinueBtn title={"Continue"}
     onPress={goToOptions}
     disabled={name.trim().length>0?false:true}
     textStyle={name.trim().length>0?styles.finalState:styles.initialState}
     />
    </View>
    )
    break;
    case 1:
      return (
      <View style={styles.container}>
 <HeaderComponent onBack={goToOptions} />
      <Heading title={"What's your current organization"}/>
      <Textinput placeholder={"Organization Name"}
     onChangeText={handleChange}
     />
     <SubHead title={"Add your company/organization name"} />
     <ContinueBtn title={"Continue"}
     onPress={goToOptions}
     disabled={name.trim().length>0?false:true}
     textStyle={name.trim().length>0?styles.finalState:styles.initialState}
     />
      </View>
      )
      break;
      case 2:
        return(
          <View style={styles.container}>
          <HeaderComponent onBack={goToOptions} />
               <Heading title={"What's your"}/>
               <Heading title={"position/designation?"}
               headStyle={{marginTop:0}}
               />
               <Textinput placeholder="Position"
              onChangeText={handleChange}
              />
              <SubHead title={"Add your occupation title"} />
              <ContinueBtn title={"Continue"}
              onPress={goToOptions}
              disabled={name.trim().length>0?false:true}
              textStyle={name.trim().length>0?styles.finalState:styles.initialState}
              />
               </View>
        )
        break;
        case 3:
          return(
            <View style={styles.container}>
            <HeaderComponent onBack={goToOptions} />
                 <Heading title={"Your Bio"}/>
                 <Textinput placeholder={"Write something about yourself..."}
                 value={name}
                onChangeText={handleChange}
               inputStyle={styles.input}
               numberOfLines={4}
               multiline={true}
               maxLength={150}
                />
                <SubHead title={`character limit:${name.length}/130`}
                subHad={styles.SubHead}
                />
                <ContinueBtn title={"Continue"}
                onPress={goToOptions}
                disabled={name.trim().length>0?false:true}
                textStyle={name.trim().length>0?styles.finalState:styles.initialState}
                />
                 </View>
          )
          break;
          case 4:
            return(
              <View style={styles.container} > 
                <HeaderComponent onBack={goToOptions} />
  <Heading title={"What's your"}/>
               <Heading title={"mobile number?"}
               headStyle={{marginTop:0}}
               />
               <View style={styles.countryCode}>
        <Text style={styles.numberInput}>{'IND+91'}</Text>
        <TextInput
          style={styles.MobileNumber}
          placeholder={'Mobile Number'}
          keyboardType="phone-pad"
          onChangeText={(num)=>setNumber(num)}
        />
        </View>
      <SubHead title={"Number you would like to be contacted at"} />
      <ContinueBtn title={"Continue"}
                onPress={goToOptions}
                disabled={number.trim().length>0?false:true}
                textStyle={number.trim().length>0?styles.finalState:styles.initialState}
                />
              </View>
            )
            break;
          case 5:
            return(
              <View style={styles.container}>
              <HeaderComponent onBack={goToOptions} />
                   <Heading title={"What's your email"}/>
                   <Textinput placeholder={"Email Address"}
                  onChangeText={handleChange}
                  />
                  <SubHead title={"Email you would like to be contacted at"} />
                  <ContinueBtn title={"Continue"}
                  onPress={goToOptions}
                  disabled={name.trim().length>0?false:true}
                  textStyle={name.trim().length>0?styles.finalState:styles.initialState}
                  />
                   </View>
            )
            break;
            case 6:
              return(
                <View style={styles.container} > 
                  <HeaderComponent onBack={goToOptions} />
    <Heading title={"What's your"}/>
                 <Heading title={"Landline/Desk number?"}
                 headStyle={{marginTop:0}}
                 />
                 <View style={styles.countryCode}>
          <Text style={styles.numberInput}>{'IND+91'}</Text>
          <TextInput
            style={styles.MobileNumber}
            placeholder={'Landline/Desk number'}
            keyboardType="phone-pad"
            onChangeText={(num)=>setNumber(num)}
          />
          
        </View>
        <SubHead title={"Number you would like to be contacted at"} />
        <ContinueBtn title={"Continue"}
                  onPress={goToOptions}
                  disabled={number.trim().length>0?false:true}
                  textStyle={number.trim().length>0?styles.finalState:styles.initialState}
                  />
                </View>
              )
              break;
              case 7:
                return(
                  <View style={styles.container} > 
                    <HeaderComponent onBack={goToOptions} />
      <Heading title={"What's your"}/>
                   <Heading title={"Fax number?"}
                   headStyle={{marginTop:0}}
                   />
                   <View style={styles.countryCode}>
            <Text style={styles.numberInput}>{'IND+91'}</Text>
            <TextInput
              style={styles.MobileNumber}
              placeholder={'Fax number'}
              keyboardType="phone-pad"
              onChangeText={(num)=>setNumber(num)}
            />
            
          </View>
          <SubHead title={"Fax Number you would like to be use"} />
          <ContinueBtn title={"Continue"}
                    onPress={goToOptions}
                    disabled={number.trim().length>0?false:true}
                    textStyle={number.trim().length>0?styles.finalState:styles.initialState}
                    />
                  </View>
                )
                break;

      default:
        return <Heading title={'not present'} />
}


  return (
    <View style={styles.container}>
     
     <Heading title={"What's your name?"} />
     
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:themeDefault.colors.white
  },
  initialState:{
    backgroundColor: themeDefault.colors.lightBlue,
    fontWeight: 'bold',
  },
  finalState:{
    
      backgroundColor: themeDefault.colors.primaryColor,
      fontWeight: 'bold',
    
  },
  input:{
    textAlign:'flex-start',
    fontSize:s(14),
    height:vs(85),
    width:s(285)
  },
  SubHead:{
    alignItems:'flex-end',
   marginHorizontal:vs(44)
  },
  countryCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 40,
    borderColor: '#00000033',
    marginTop: s(65),
    marginBottom: s(10),
  },
  MobileNumber: {
    marginTop: s(0),
    height: vs(38),
    width: s(180),
    marginLeft: s(3),
    fontSize: s(16),
    fontWeight: '500',
    color: themeDefault.colors.black,
  },
  numberInput: {
    marginTop: vs(10),
    height: vs(21),
    width: s(80),
    color: themeDefault.colors.primaryColor,
    fontSize: s(17),
  },
})


export default Profile;
