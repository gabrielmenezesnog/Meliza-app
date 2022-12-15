import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {CustomTitle} from '../../../components/CustomTitle';
import {styles} from './style';
import Ioicons from 'react-native-vector-icons/Ionicons';
import {ProfileModal} from '../../../components/ProfileModal';
// import {useNavigation} from '@react-navigation/native';
// import {propsStack} from '../../../Models/propsNavigationStack';

export const Profile = () => {
  const [visibility, setvisibility] = React.useState(false);
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
              onPress={() => setvisibility(true)}
              name="ellipsis-vertical-outline"
              size={32}
              color={'#7E838C'}
            />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            visible={visibility}
            transparent={true}
            onRequestClose={() => setvisibility(false)}>
            <ProfileModal
              handleClose={() => {
                setvisibility(false);
              }}
            />
          </Modal>
        </View>
      </View>
    </View>
  );
};
