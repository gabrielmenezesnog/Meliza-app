import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from '../Models/propsNavigationStack';
import {DashBoard} from '../screens/DashBoard';
import {Schedules} from '../screens/Schedules';

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();

export const AppStack = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Screen name="DashBoard" component={DashBoard} />
      <Screen name="Schedules" component={Schedules} />
    </Navigator>
  );
};
