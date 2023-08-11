import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MobileVerf from '../screens/onBoarding/mobileVerif';
import EmailVerf from '../screens/onBoarding/emailVerif';
import ConfirmCode from '../screens/onBoarding/confirmCode';
import NameCheck from '../screens/onBoarding/yourName';
import OrgCheck from '../screens/onBoarding/yourOrg';
import ContactName from '../screens/onBoarding/yourContactName';
import Privacyp from '../screens/onBoarding/privacyPolicy';
import Loading from '../screens/onBoarding/loadingPage';
import HomePage from '../screens/onBoarding/homeScreen';
import YourPosition from '../screens/onBoarding/yourPosition';
import HomeShake from '../screens/homepage/homeShake';
import HomeTab from './bottom';
import Settings from '../screens/setting/option';
import Profile from '../screens/setting/settingProfile';
import ContactMe from '../screens/setting/aboutMe';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='homeStack' >
        <Stack.Screen name="landing" component={HomePage} />
        <Stack.Screen name="MobileVerification" component={MobileVerf}  />
        <Stack.Screen name="EmailVerf" component={EmailVerf}  />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode}  />
        <Stack.Screen name="NameCheck" component={NameCheck}  />
        <Stack.Screen name="OrgCheck" component={OrgCheck}  />
        <Stack.Screen name="YourPostn" component={YourPosition} />
        <Stack.Screen name="Contact" component={ContactName} />
        <Stack.Screen name="Privacy" component={Privacyp}/>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="homeStack" component={HomeTab} />
        <Stack.Screen name="contactMe" component={ContactMe} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
