import React, {useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';

import {SocialMediabtn} from '@button';
import styles from './style';
import {Heading} from '@text';
import ModalPicker from '@modalPicker';
import {themeDefault} from '@themes';
import {s, vs} from 'react-native-size-matters/extend';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Button} from '../../components/button';
import {setStorage, getStorage} from '@storage';

const {height, width} = Dimensions.get('window');

const ContactMe = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState('');
  const openImagePicker = () => {
    const option = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchImageLibrary(option, response => {
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('image picker error', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
    setStorage('img', selectedImage);
  };
  const handleCameraLaunch = () => {
    const option = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('user cancelled camera');
      } else if (response.error) {
        console.log('camera error:', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };
  //getStorage('img');
  const options = [
    {id: 1, title: 'twitter'},
    {id: 2, title: 'facebook'},
    {id: 3, title: 'whatsapp'},
    {id: 4, title: 'linkedin'},
  ];

  const [modalVisible, setmodalVisible] = useState(false);
  const goToOptions = () => {
    navigation.navigate('Settings');
  };
  const [myNotes, setmyNotes] = useState([]);
  const [myNotesArray, setmyNotesArray] = useState([]);
  const onSubmitPress = () => {
    let myNotesData = {
      id: new Date(),
      title: myNotes,
      details: 'demo details',
    };
    setmyNotesArray([...myNotesArray, myNotesData]);
    setmodalVisible(false);
  };
  const renderItemList = ({item}) => {
    return (
      <View
        style={{
          height: vs(70),
          backgroundColor: 'grey',
          width: s(70),
          marginRight: vs(20),
          marginBottom: vs(35),
        }}>
        <Text>{item.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.profile}>
        <View style={styles.settingIcon}>
          <Pressable onPress={goToOptions}>
            <Image
              source={require('../../assets/images/settingsIcon.jpeg')}
              resizeMode="contain"
              style={styles.settingsIconStyle}
            />
          </Pressable>
        </View>
        <View style={styles.image}>
          {selectedImage && (
            //<TouchableHighlight style={styles.personImg}>
            <Image style={styles.personImg} source={{uri: selectedImage}} />
            //</TouchableHighlight>
          )}
          <TouchableHighlight style={styles.logo}>
            <Text style={styles.logoText}>{'Logo'}</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.profileData}>
          <Heading title={'Michael Cole'} headStyle={styles.textName} />
          <Heading
            title={'C0-FOUNDER AT PHONESHAKE INC.'}
            headStyle={styles.cmpnyName}
          />
        </View>
      </View>

      <View style={styles.logoView}>
        <SocialMediabtn
          text={'Add'}
          onPress={() => setmodalVisible(true)}
          image={require('../../assets/images/plusSign.png')}
        />
        {/* <Button
          title={'choose from device'}
          onPress={openImagePicker}
          textStyle={{alignSelf: 'center'}}
        />
        <Button
          title={'open camera'}
          onPress={handleCameraLaunch}
          textStyle={{marginTop: 0}}
        /> */}
        <FlatList data={myNotesArray} renderItem={renderItemList} />

        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View
              style={{
                alignItems: 'center',
                height: height / 2,
                marginTop: 350,
                backgroundColor: 'skyblue',
              }}>
              <Text style={{fontSize: s(24), marginBottom: vs(20)}}>
                {'Social Media Links'}
              </Text>
              <View
                style={{
                  height: 80,
                  width: 250,
                  fontSize: 20,
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}>
                <TextInput
                  style={{fontSize: vs(20)}}
                  placeholder={'enter the social media site'}
                  value={myNotes}
                  onChangeText={value => setmyNotes(value)}
                />
              </View>
              <TouchableOpacity
                onPress={onSubmitPress}
                style={{
                  backgroundColor: 'pink',
                  height: 50,
                  width: 100,
                  borderRadius: 10,
                  marginTop: 20,
                }}>
                <View>
                  <Text
                    style={{
                      fontSize: vs(21),
                      textAlign: 'center',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    {'select'}
                  </Text>
                </View>
              </TouchableOpacity>

              {/* <FlatList data={options} 
        renderItem={({item})=>(
          <Text 
          onPress={()=>setmodalVisible(false)}
          style={{fontSize:s(24),marginBottom:vs(20),color:'black'}} >{item.title}</Text>
  )}
        /> */}

              {/* <TouchableOpacity onPress={()=>setmodalVisible(false)} >
          <View  >
          <Text style={{fontSize:20,}} >{"select"}</Text>
          </View>
        </TouchableOpacity> */}
              <View></View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default ContactMe;
