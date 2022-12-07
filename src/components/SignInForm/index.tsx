import React from 'react';
import {Text, View} from 'react-native';
import {SubmitButton} from '../buttons/SubmitButton';
import {CustomTextInput} from '../CustomInput';
import {styles} from './style';
import InputValitation from '../../services/inputValidation';
import {useAuth} from '../../context/Auth';

export const SignInForm = () => {
  const {signIn} = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailPlaceholder, setEmailPlaceholder] = React.useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = React.useState('Senha');

  const [emailInputColor, setEmailInputColor] = React.useState('#636973');
  const [passwordInputColor, setPasswordInputColor] = React.useState('#636973');

  const onSignUpPressed = async () => {
    if (inputsValiation() === true) {
      signIn(email, password);
    }
  };

  const inputsValiation = () => {
    const validate = new InputValitation();
    let status = false;

    if (email !== '' && validate.verifyEmail(email)) {
      status = true;
    } else {
      status = false;
      setEmail('');
      setEmailPlaceholder('Insira um email válido');
      setEmailInputColor('#FF4747');
    }

    if (password !== '') {
      const passwordCheck = validate.verifyPassword(password);
      if (passwordCheck === true) {
        status = true;
      } else {
        status = false;
        setPassword('');
        setPasswordPlaceholder('Senha muito pequena');
        setPasswordInputColor('#FF4747');
      }
    } else {
      status = false;
      setPassword('');
      setPasswordPlaceholder('Insira uma senha');
      setPasswordInputColor('#FF4747');
    }

    return status;
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Entrar</Text>
      <View style={styles.inputsDisplay}>
        <CustomTextInput
          placeHolder={emailPlaceholder}
          value={email}
          setValue={setEmail}
          placeholderTextColor={emailInputColor}
        />
      </View>
      <View style={styles.inputsDisplay}>
        <CustomTextInput
          placeHolder={passwordPlaceholder}
          value={password}
          setValue={setPassword}
          placeholderTextColor={passwordInputColor}
          isPassword={true}
        />
      </View>
      <View style={styles.submitButton}>
        <SubmitButton onPress={onSignUpPressed} text="avançar" />
      </View>
      <View style={styles.bottomTextDisplay}>
        <Text style={styles.normalText}>Esqueceu sua senha?</Text>
        <Text style={styles.linkText}> Redefina agora</Text>
        <Text style={styles.normalText}>.</Text>
      </View>
    </View>
  );
};
