import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ms, s, vs } from 'react-native-size-matters/extend';
import {themeDefault} from '../../themes';

const ModalBox = ({onPress, isVisible, closeModal}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
       
      <Modal
      
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}>
             <View style={styles.modal} >
        <Text style={styles.text} >{'Add a Mobile Number/Email'}</Text>
        <Text style={styles.text}>{'before removing'}</Text>
       
        <TouchableOpacity onPress={closeModal} style={styles.button}>
          <Text style={styles.buttontext} >{'Okay'}</Text>
        </TouchableOpacity>
        </View>
      </Modal>
    
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:'center',
alignItems:'center',
backgroundColor:themeDefault.colors.white
  },
  modal:{
    flex:1,
    height:150,
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    height:s(35),
    backgroundColor: themeDefault.colors.primaryColor,
   width:vs(135),
   borderRadius:ms(5),
   marginTop:vs(20)
  },
  buttontext:{
    color:themeDefault.colors.white,
    fontSize:s(16),
    fontWeight:'600'
  },
  text:{
    fontSize:s(16),
    lineHeight:vs(19),
    fontWeight:'bold'
  }
});

export default ModalBox;
