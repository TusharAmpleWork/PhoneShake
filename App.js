import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import HomeStack from './src/navigation/stack';
import { themeDefault } from './src/themes';

const App = () => {
 return(
  <SafeAreaView style={{flex:1,backgroundColor:themeDefault.colors.white}} >
   <HomeStack />
   </SafeAreaView>
 )
};

export default App;
