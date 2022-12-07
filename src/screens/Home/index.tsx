import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {SignInButton} from '../../components/buttons/signInButton';
import {Logo} from '../../components/Logo';
import {styles} from './style';
import {SignUpButton} from '../../components/buttons/signUpButton';

export const Home = () => {
  return (
    <ImageBackground
      style={styles.mainContainer}
      source={require('./background.jpg')}>
      <Logo />
      <View style={styles.menuContainer}>
        <SignInButton />
        <View style={styles.defaultGap}>
          <SignUpButton />
        </View>
      </View>
      <View style={styles.allRights}>
        <Text style={styles.bottomText}>
          Meliza © Todos os direitos reservados.
        </Text>
      </View>
    </ImageBackground>
  );
};
