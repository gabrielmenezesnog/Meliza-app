import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    resizeMode: 'cover',
    height: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  menuContainer: {
    marginTop: '20%',
  },
  defaultGap: {
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
  },
  allRights: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '5%',
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Poppins-Regular',
    color: '#989EA6',
    marginLeft: 4,
  },
});
