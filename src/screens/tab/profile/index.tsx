import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {CustomTitle} from '../../../components/CustomTitle';
import {styles} from './style';
import Ioicons from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';
// import {propsStack} from '../../../Models/propsNavigationStack';

export const Profile = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileHeader}>
        <CustomTitle
          text="Nome"
          icon={require('../../../assets/img/title-detail-blue.png')}
        />
        <View>
          <TouchableOpacity>
            <Ioicons
              name="ellipsis-vertical-outline"
              size={32}
              color={'#000'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
