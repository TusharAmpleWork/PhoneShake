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
import LinkedAccounts from '../screens/setting/linkedAccount';
import AccountInfo from '../screens/setting/accountInfo';
import Edit from '../screens/setting/editAddress';
import AccountPrivacy from '../screens/setting/accountPrivacy';

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeTab' >
        <Stack.Screen name="landing" component={HomePage} />
        <Stack.Screen name="MobileVerf" component={MobileVerf}  />
        <Stack.Screen name="EmailVerf" component={EmailVerf}  />
        <Stack.Screen name="ConfirmCode" component={ConfirmCode}  />
        <Stack.Screen name="NameCheck" component={NameCheck}  />
        <Stack.Screen name="OrgCheck" component={OrgCheck}  />
        <Stack.Screen name="YourPostn" component={YourPosition} />
        <Stack.Screen name="ContactName" component={ContactName} />
        <Stack.Screen name="Privacyp" component={Privacyp}/>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="contactMe" component={ContactMe} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="LinkedAccounts" component={LinkedAccounts} />
        <Stack.Screen name="AccountInfo" component={AccountInfo} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="AccountPrivacy" component={AccountPrivacy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
