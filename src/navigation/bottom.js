import React from 'react';
import {View, TextInput, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeTopTab from './top';
import {themeDefault} from '@themes';
import { s, vs } from 'react-native-size-matters/extend';
import ContactMe from '../screens/setting/aboutMe';

const HomeTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        headerRight: () => <AvlbBtn number={7} />,
      }}>
      <Tab.Screen
        name="a"
        component={HomeTopTab}
        options={{
          tabBarActiveTintColor: themeDefault.colors.primaryColor,
          tabBarInactiveTintColor: themeDefault.colors.secondaryColor,
          tabBarIcon: ({focused}) => (
            <View style={{height: vs(21), position: 'absolute'}}>
              <Ionicons
                name="square-sharp"
                style={{
                  fontSize:s(21),
                  color: focused
                    ? themeDefault.colors.primaryColor
                    : themeDefault.colors.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="b"
        component={HomeTopTab}
        options={{
          tabBarActiveTintColor: themeDefault.colors.primaryColor,
          tabBarInactiveTintColor: themeDefault.colors.secondaryColor,
          tabBarIcon: ({focused}) => (
            <View style={{height: vs(21), position: 'absolute'}}>
              <Ionicons
                name="square-sharp"
                style={{
                  fontSize:s(21),
                  color: focused
                    ? themeDefault.colors.primaryColor
                    : themeDefault.colors.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="v"
        component={ContactMe}
        options={{
          tabBarActiveTintColor: themeDefault.colors.primaryColor,
          tabBarInactiveTintColor: themeDefault.colors.secondaryColor,
          tabBarIcon: ({focused}) => (
            <View style={{height: vs(21), position: 'absolute'}}>
              <Ionicons
                name="square-sharp"
                style={{
                  fontSize:s(21),
                  color: focused
                    ? themeDefault.colors.primaryColor
                    : themeDefault.colors.secondaryColor,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTab;
