import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  s,
  scale,
  verticalScale,
  vs,
  ScaledSheet,
} from 'react-native-size-matters/extend';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubHead from '@subText';
import {Heading} from '@text';
import {themeDefault} from '@themes';
const {height, width} = Dimensions.get('window');
import QRCodeScanner from 'react-native-qrcode-scanner';
const Qrcode = ({navigation}) => {
  const [first, setFirst] = useState(true);
  const [data, setData] = useState('scan something');
  return (
    <View style={styles.container}>
      {/* <QRCodeScanner
        onRead={({data}) => setData(data)}
        reactivate={true}
        reactivateTimeout={500}
        showMarker={true}
        topContent={
          <View>
            <Text
              style={{
                color: 'black',
                padding: 20,
                fontSize: 20,
                backgroundColor: 'grey',
                margin: 10,
              }}>
              {data}
            </Text>
          </View>
        }
        bottomContent={
          <View>
            <Text>{'QR code scanner'}</Text>
          </View>
        }
      /> */}
      {/* <View style={styles.image}>
        <TouchableOpacity>
          {first ? (
            <Image
              source={require('../../assets/images/QRcode.png')}
              style={first ? styles.initialStyle : styles.finalStyle}
            />
          ) : (
            <Image
              source={require('../../assets/images/Robot.png')}
              style={first ? styles.finalStyle : styles.initialStyle}
            />
          )}
        </TouchableOpacity>
      </View> */}

      <Heading title={'Steve Nash'} headStyle={{marginTop: s(20)}} />

      <Text style={styles.text}>{'@snash'}</Text>
      <View style={{alignItems: 'center', marginTop: scale(35)}}>
        <TouchableOpacity onPress={() => setFirst(!first)}>
          {first ? (
            <Image
              source={require('../../assets/images/Robot.png')}
              style={styles.initialStateStyle}
            />
          ) : (
            <Image
              source={require('../../assets/images/QRcode.png')}
              style={styles.finalStyle}
            />
          )}
        </TouchableOpacity>
      </View>
      <SubHead
        title={'Share QR Code'}
        subStyle={{
          textAlign: 'center',
          fontSize: 14,
          marginTop: 50,
          color: themeDefault.colors.primaryColor,
          marginTop: 20,
        }}
      />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: themeDefault.colors.white},
  image: {alignItems: 'center', marginTop: vs(75)},
  initialStyle: {
    height: vs(200),
    width: vs(200),
  },
  finalStyle: {
    height: vs(60),
    width: vs(60),
  },
  text: {
    textAlign: 'center',
    fontSize: s(16),
    color: themeDefault.colors.grey,
    marginTop: vs(5),
  },
  mainView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  finalStyle: {
    height: vs(60),
    width: vs(60),
  },
  initialStateStyle: {height: vs(60), width: vs(60)},
});
export default Qrcode;
