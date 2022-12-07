import React from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './styles';

export const CustomTextInput = ({
  value,
  setValue,
  placeHolder,
  isPassword,
  style = styles.inputStyle,
  placeholderTextColor = '#636973',
}: {
  value?: any;
  setValue?: any;
  placeHolder?: any;
  isPassword?: boolean;
  style?: any;
  placeholderTextColor?: any;
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeHolder}
        secureTextEntry={isPassword}
        placeholderTextColor={placeholderTextColor}
        style={style}
      />
    </View>
  );
};
