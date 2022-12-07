import React from 'react';
import {ImageBackground, View} from 'react-native';
import {GoBackButton} from '../../components/buttons/goBackButton';
import {SignInForm} from '../../components/SignInForm';
import {styles} from './styles';

export const SignIn = () => {
  return (
    <View>
      <ImageBackground
        style={styles.mainContainer}
        source={require('./background.jpg')}>
        <GoBackButton />
        <SignInForm />
      </ImageBackground>
    </View>
  );
};
