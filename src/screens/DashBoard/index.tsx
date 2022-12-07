import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models/propsNavigationStack';

export const DashBoard = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <View>
      <Text>The DashBoard will be put in here</Text>
      <Button
        onPress={() => navigation.navigate('Schedules')}
        title="agendas"
      />
    </View>
  );
};
