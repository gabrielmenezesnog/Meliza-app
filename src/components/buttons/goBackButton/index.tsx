import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/core';

export const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={() => {
        navigation.goBack();
      }}>
      <Image style={styles.button} source={require('./nav-back.png')} />
    </TouchableOpacity>
  );
};
