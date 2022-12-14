import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './style';

export const CustomTitle = ({text, icon}: {text: string; icon: any}) => {
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.titleIcon} source={icon} />
      <Text style={styles.defaultText}>{text}</Text>
    </View>
  );
};
