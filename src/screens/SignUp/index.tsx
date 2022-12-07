import React from 'react';
import {ImageBackground, View} from 'react-native';
import {GoBackButton} from '../../components/buttons/goBackButton';
import {SignUpForm} from '../../components/SignUpForm';
import {styles} from './styles';

export const SignUp = () => {
  return (
    <View>
      <ImageBackground
        style={styles.mainContainer}
        source={require('./background.jpg')}>
        <GoBackButton />
        <SignUpForm />
      </ImageBackground>
    </View>
  );
};
