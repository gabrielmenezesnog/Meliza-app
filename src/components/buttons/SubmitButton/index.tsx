import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const SubmitButton = ({onPress, text}: {onPress: any; text: string}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
