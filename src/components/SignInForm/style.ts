import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontFamily: 'Poppins-Regular',
    color: '#F5F7FA',
    marginBottom: 60,
  },
  inputsDisplay: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginBottom: 28,
  },
  submitButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  bottomTextDisplay: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 4,
    paddingHorizontal: 20,
  },
  normalText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#989EA6',
  },
  linkText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 12,
    color: '#1E90FF',
  },
  invalidInput: {
    borderBottomWidth: 1,
    paddingBottom: 4,
    borderBottomColor: '#FF4747',
    fontFamily: 'Poppins-Regular',
    width: '100%',
    color: '#F5F7FA',
    fontSize: 16,
  },
});
