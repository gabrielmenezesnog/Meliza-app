import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/core';
import {propsStack} from '../../../Models/propsNavigationStack';

export const SignUpButton = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SignUp');
      }}>
      <View style={styles.mainContainer}>
        <Text style={styles.buttonText}>criar conta</Text>
      </View>
    </TouchableOpacity>
  );
};
