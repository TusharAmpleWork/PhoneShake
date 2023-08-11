import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import {ContinueBtn} from '../../components/button';
import { MainText } from '../../components/text';

const HomePage = ({navigation}) => {
  const goToMobileVerif = () => navigation.navigate('MobileVerification');

  return (
    <View style={styles.wholepage}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logoS1.png')}
      />
      <MainText title={'Welcome to'} />
      <MainText title={'Phoneshake'} />
      <View style={styles.login}>
        <ContinueBtn
          title="Get Started"
          textStyle={styles.landingBtn}
          onPress={goToMobileVerif}
        />
        <View style={styles.textMargin}>
          <Text style={styles.btnSubHead}>{'Phoneshake for businesses'}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
