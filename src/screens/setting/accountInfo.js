import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Pressable, Alert} from 'react-native';
import ActionSheet from '@alessiocancian/react-native-actionsheet';
import {ScaledSheet, vs} from 'react-native-size-matters/extend';
import Action from '../../components/actionSheet';
import HeaderComponent from '@headerComp';
import {ModalBox, ModalView} from '../../components/model';
import {Heading, SubSection} from '@text';
import {themeDefault} from '@themes';
import {getStorage, removeStorage} from '@storage';
import {useIsFocused} from '@react-navigation/native';

const AccountInfo = ({navigation}) => {
  const isFocussed = useIsFocused();
  useEffect(() => {}, [isFocussed]);
  let actionSheet = useRef();
  let accountSheet = useRef();
  let dataSheet = useRef();
  let optionArray = ['Delete', 'cancel'];
  let optionList = ['Remove', 'cancel'];
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const goBack = () => navigation.goBack();
  const handleClose = () => setVisible(false);
  const handleCloseModal = () => {
    setShow(false);
    setData(!data);
  };
  const toggleModal = () => setVisible(!visible);
  const showModal = () => setShow(!show);
  const handleActionSheet = item => {
    if (optionArray[item] == 'Delete') {
      toggleModal();
    } else {
      handleClose();
    }
  };
  handleEmail = () => {
    showModal();
  };
  const removeEmail = item => {
    if (optionList[item] == 'Remove') {
      removeStorage('email');

      //Alert.alert('removed');
    } else {
      handleClose();
    }
  };
  const removeMobileNumber = item => {
    if (optionList[item] == 'Remove') {
      removeStorage('phone');
      //Alert.alert('removed');
    } else {
      handleClose();
    }
  };
  let yourEmail = getStorage('email');
  let yourPhoneNo = parseInt(getStorage('phone'));

  return (
    <View style={styles.container}>
      <View>
        <HeaderComponent onBack={goBack} />
        <Heading title={'Linked Accounts'} headStyle={{marginTop: vs(-10)}} />
      </View>
      <View style={styles.border}></View>
      <Pressable onPress={() => accountSheet.current.show()}>
        <SubSection text={'Mobile Number'} name={yourPhoneNo} />
      </Pressable>
      {data ? (
        <Pressable onPress={() => dataSheet.current.show()}>
          <SubSection text={'Email'} name={yourEmail} />
        </Pressable>
      ) : null}
      <Pressable onPress={() => handleEmail()}>
        <SubSection text={'Add Email or Mobile Number'} />
      </Pressable>
      <Pressable onPress={() => actionSheet.current.show()}>
        <SubSection
          text={'Delete Account'}
          //onPress={isVisible}
        ></SubSection>
        <ModalBox
          isVisible={visible}
          closeModal={handleClose}
          primaryText={
            'This cannot be undone. You will lose all your contacts, messages and information if you delete the account.'
          }
          primaryButton={'Delete'}
          secondaryButton={'Cancel'}></ModalBox>
        <ModalView
          isVisible={show}
          closeModal={handleCloseModal}
          primaryText={'Add a Mobile Number/Email before removing'}
          secondaryButton={'Okay'}></ModalView>
      </Pressable>
      <ActionSheet
        ref={actionSheet}
        title={'Delete Account'}
        message={'Are you sure you want to delete your account?'}
        options={optionArray}
        destructiveButtonIndex={0}
        onPress={item => {
          handleActionSheet(item);
        }}
        //onPress={handlePress}
      />
      <ActionSheet
        ref={accountSheet}
        title={'Remove Mobile Number'}
        message={'Are you sure you want to remove +1 802-283-2910?'}
        options={optionList}
        destructiveButtonIndex={0}
        onPress={item => {
          removeMobileNumber(item);
        }}
        //onPress={handlePress}
      />
      <ActionSheet
        ref={dataSheet}
        title={'Remove Email'}
        message={`Are you sure you want to remove ${yourEmail}?`}
        options={optionList}
        destructiveButtonIndex={0}
        onPress={item => {
          removeEmail(item);
        }}
        //onPress={handlePress}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeDefault.colors.white,
  },
  border: {
    borderBottomWidth: 0.7,
    borderColor: '#CCCCCC',
    marginTop: vs(10),
  },
});

export default AccountInfo;
