import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get('window');

export const ProfileModal = ({
  handleClose,
  handleLogOut,
  handleActivity,
}: {
  handleClose: any;
  handleLogOut?: any;
  handleActivity?: any;
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backgroundShadow} onPress={handleClose} />
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={handleActivity}>
          <Text style={styles.buttonText}>histórico de atividades</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut}>
          <Text style={styles.buttonText}>sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
  },
  mainContainer: {
    padding: 20,
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: SCREEN_HEIGHT / 1.2,
    borderRadius: 6,
    backgroundColor: '#0B0C12',
    zIndex: 2,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins-Regular',
    color: '#989EA6',
    textAlign: 'left',
    minWidth: '100%',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
  },
  backgroundShadow: {
    height: SCREEN_HEIGHT,
    zIndex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
});
