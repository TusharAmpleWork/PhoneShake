import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {vs} from 'react-native-size-matters/extend';
import HomeStack from './src/navigation/stack';
import {themeDefault} from '@themes';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeStack />
    </SafeAreaView>
  );
};

export default App;
