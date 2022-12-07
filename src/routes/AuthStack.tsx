import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home';
import {SignIn} from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {propsNavigationStack} from '../Models/propsNavigationStack';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export const AuthStack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};
