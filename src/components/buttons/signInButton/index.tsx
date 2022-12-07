import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {propsStack} from '../../../Models/propsNavigationStack';

export const SignInButton = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SignIn');
      }}>
      <View style={styles.mainContainer}>
        <Text style={styles.buttonText}>entrar</Text>
      </View>
    </TouchableOpacity>
  );
};
