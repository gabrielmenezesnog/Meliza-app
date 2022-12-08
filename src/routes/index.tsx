import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStack} from './stack/AuthStack';
import {useAuth} from '../context/Auth';
import {AppBottomTab} from './bottom-tab/AppBottomTab';

export const Routes = () => {
  const {authData} = useAuth();

  return (
    <NavigationContainer>
      {authData ? <AppBottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
