import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  Alert,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import HomeShake from '../screens/homepage/homeShake';
import Qrcode from '../screens/homepage/qrCode';
import Sharescrn from '../screens/homepage/shareContact';
import {AvlbBtn} from '@button';
import {themeDefault} from '@themes';
import {setStorage, getStorage} from '@storage';
import {s, vs} from 'react-native-size-matters/extend';
import styles from '../screens/onBoarding/style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const {height, width} = Dimensions.get('window');
const HomeTopTab = () => {
  const Tab = createMaterialTopTabNavigator();
  const countInc = useSelector(state => state.reducer1);
  const [inc, setInc] = useState(0);
  useEffect(() => {
    setInc(countInc.length);
  }, [countInc]);
  const getItem = getStorage('cnt');
  return (
    <View style={styles.wholepage}>
      <View style={{flexDirection: 'row'}}>
        <View style={style.input}>
          <EvilIcons name="search" style={style.icon} />
          <TextInput style={style.inputs} placeholder="Search Address" />
        </View>
        <AvlbBtn number={getItem} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          // tabBarStyle: { backgroundColor: 'powderblue' },
          tabBarIconStyle: {
            marginRight: vs(35),
          },
        }}>
        <Tab.Screen
          name="shake"
          component={HomeShake}
          options={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: themeDefault.colors.primaryColor,
            tabBarInactiveTintColor: themeDefault.colors.lightGrey,

            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  //height: vs(28),
                  width: width,
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="vibrate"
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(20),
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(14),
                    textAlign: 'center',
                    marginHorizontal: vs(5),
                  }}>
                  {'Shake'}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="qr"
          component={Qrcode}
          options={{
            tabBarShowLabel: false,
            //    tabBarLabel:"Shake",
            tabBarActiveTintColor: themeDefault.colors.primaryColor,
            tabBarInactiveTintColor: themeDefault.colors.lightGrey,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  //height: vs(28),
                  width: width / 5,
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="qr-code-2"
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(20),
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(14),
                    textAlign: 'center',
                  }}>
                  {'QR Code'}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="share"
          component={Sharescrn}
          options={{
            tabBarShowLabel: false,
            //    tabBarLabel:"Shake",
            tabBarActiveTintColor: themeDefault.colors.primaryColor,
            tabBarInactiveTintColor: themeDefault.colors.lightGrey,
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  //height: vs(28),
                  width: width / 5,
                  alignItems: 'center',
                }}>
                <Feather
                  name="send"
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(20),
                  }}
                />
                <Text
                  style={{
                    color: focused
                      ? themeDefault.colors.primaryColor
                      : themeDefault.colors.lightGrey,
                    fontSize: s(14),
                    textAlign: 'center',
                  }}>
                  {'Share'}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const style = StyleSheet.create({
  input: {
    flexDirection: 'row',
    height: vs(29),
    width: '80%',
    backgroundColor: themeDefault.colors.offWhite,
    marginHorizontal: vs(12),
  },
  icon: {
    marginTop: vs(4),
    fontSize: s(20),
  },
  inputs: {
    marginHorizontal: 10,
  },
});

export default HomeTopTab;
