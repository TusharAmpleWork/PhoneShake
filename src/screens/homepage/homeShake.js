import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Heading} from '@text';
import {s, vs, ScaledSheet} from 'react-native-size-matters/extend';
import {themeDefault} from '@themes';
import {useDispatch} from 'react-redux';
import {setStorage, getStorage} from '@storage';
import {addItem} from '../../store/homepage/action';
const HomeShake = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const handleContactShake = () => {
    setCount(() => count + 1);
    dispatch(addItem(count + 1));
    setStorage('cnt', count + 1);
  };
  const getItemCount = getStorage('cnt');
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('../../assets/images/cellPhone.png')}
          style={styles.image}
        />
        <Heading
          title={'Shake your phone with someone,'}
          headStyle={{marginTop: s(20)}}
        />
        <Heading
          title={"like you'd shake hands!"}
          headStyle={{marginTop: s(0)}}
        />
        <TouchableOpacity onPress={handleContactShake}>
          <Text>{getItemCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: themeDefault.colors.white},
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vs(80),
  },
  image: {height: s(75), width: s(100)},
});
export default HomeShake;
