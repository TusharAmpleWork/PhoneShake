import React from 'react';
import {View, Image, Text, Button, Alert, Dimensions, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import HomeShake from '../screens/homepage/homeShake';
import Qrcode from '../screens/homepage/qrCode';
import Sharescrn from '../screens/homepage/shareContact';
import {AvlbBtn} from '../components/button';
import { themeDefault } from '../themes';
import { s, vs } from 'react-native-size-matters/extend';
import styles from '../screens/onBoarding/style';
const {height,width}=Dimensions.get('window')
const HomeTopTab = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.wholepage}>
      <View style={{marginTop:vs(35), flexDirection: 'row'}}>
        <AvlbBtn number={7}  />
      </View>
      <Tab.Navigator>
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
                    flex:1,
                    
                    flexDirection: 'row',
                    justifyContent: "flex-start",
        
                    height: vs(28),
                    width:width/4,
                    alignItems: 'center',
                    
                  }}>
                  <MaterialCommunityIcons
                    name="vibrate"
                    style={{
                      color: focused ? themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
                      fontSize: vs(20),
                    
                    }}
                  />

                  <Text
                    style={{
                      color: focused ? themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
                      fontSize: s(14),
                      textAlign: 'center',
                    marginHorizontal:vs(5)
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
                    height: vs(28),
                    width: width/5,
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    name="qr-code-2"
                    style={{
                      color: focused ? themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
                      fontSize: s(20),
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
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
                    height: vs(28),
                    width: width/5,
                    alignItems: 'center',
                  }}>
                  <Feather
                    name="send"
                    style={{
                      color: focused ?themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
                      fontSize: s(20),
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? themeDefault.colors.primaryColor : themeDefault.colors.lightGrey,
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



export default HomeTopTab;
