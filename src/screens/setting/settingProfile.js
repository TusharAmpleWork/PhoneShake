import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {ContinueBtn} from '../../components/button';
import HeaderComponent from '../../components/headerComp';
import SubHead from '../../components/subText';
import {Heading, SubSection} from '../../components/text';
import Textinput from '../../components/textInput';
import styles from './style';
const Profile = ({params,navigation,route}) => {
  
  const [state, setState] = useState({
    number: '',
    show: true,
    txtColor: false,
  });
 const[change,setChange]=useState('')
const handleClick=(val)=>
setChange(val)


  const handleChange = value => {
    setState(prevState => ({
      ...prevState,
      number: value,
    }));
  };

  const goToOrg = () => {
    navigation.navigate('OrgCheck');
  };
  //const {role}=route.params.name

  return (
    <View style={styles.wholepage}>
      <HeaderComponent onBack={() => navigation.goBack()} />
     {/* <Text>{route.params.name}</Text> */}
     {
      change==route.params.name? <Heading title={route.params.name} />
      :
      <Heading title={route.params.organization} />
     }
    
   
     <Heading title={route.params.position} />
      {/* <Heading title={"What's your name?"} />
      <Textinput placeholder={'Full Name'} onChangeText={handleChange} />
      <SubHead title={'Add your first and last name'} />
      <ContinueBtn
        title={'Continue'}
        //onPress={goToOrg}
        disabled={state.number.trim().length > 0 ? false : true}
        textStyle={
          state.number.trim().length > 0
            ? styles.finalState
            : styles.initialState
        }
      /> */}
    </View>
  );
};

export default Profile;
