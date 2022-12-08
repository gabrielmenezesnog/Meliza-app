import React from 'react';
import {propsNavigationStack} from '../../Models/propsNavigationStack';
import {Schedules} from '../../screens/tab/Schedules';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Patients} from '../../screens/tab/patients';
import {Plans} from '../../screens/tab/plans';
import {Profile} from '../../screens/tab/profile';

import Ioicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator<propsNavigationStack>();

export const AppBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Schedules"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0B0C12',
          borderTopWidth: 0,
          position: 'absolute',
          bottom: 0,
          elevation: 0,
          paddingTop: 4,
          paddingBottom: 4,
          height: 60,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#7E838C',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Ioicons name="reader-outline" size={size} color={color} />
          ),
        }}
        name="Schedules"
        component={Schedules}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Ioicons name="people-outline" size={size} color={color} />
          ),
        }}
        name="Patients"
        component={Patients}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Ioicons name="ribbon-outline" size={size} color={color} />
          ),
        }}
        name="Plans"
        component={Plans}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color}) => (
            <Ioicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};
