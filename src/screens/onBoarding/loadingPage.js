import React from 'react';
import {Text, View} from 'react-native';
import AnimatedEllipsis from 'react-native-animated-ellipsis';
import styles from './style';
const Loading = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('homeStack');
  }, 3000);
  return (
    <View style={styles.wholepage}>
      <View style={styles.animation}>
        <AnimatedEllipsis style={styles.animationSize} />
        <Text style={styles.animationTitle}>{'We are getting your'}</Text>
        <Text style={styles.animationTitle}>{'account ready...'}</Text>
      </View>
    </View>
  );
};
export default Loading;
