import React, {useState} from 'react';
import {Animated, Text, View} from 'react-native';
import Loader from 'react-native-three-dots-loader';
import styles from './style';

// const animateIn = () => {
//   Animated.timing(animatePress, {
//     toValue: 0.5,
//     duration: 500,
//     useNativeDriver: true, // Add This line
//   }).start();
// };
const Loading = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('HomeTab');
  }, 3000);
  return (
    <View style={styles.wholepage}>
      <View style={styles.animation}>
        <Loader style={styles.animationSize} />
        <Text style={styles.animationTitle}>{'We are getting your'}</Text>
        <Text style={styles.animationTitle}>{'account ready...'}</Text>
      </View>
    </View>
  );
};
export default Loading;
