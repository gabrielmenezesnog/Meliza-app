import React from 'react';
import {Alert, Text, View} from 'react-native';
import {SubmitButton} from '../buttons/SubmitButton';
import {CustomTextInput} from '../CustomInput';
import {styles} from './style';
import InputValitation from '../../services/inputValidation';

import {api} from '../../api/apiManager';

export const SignUpForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const [namePlaceholder, setNamePlaceholder] = React.useState('Nome');
  const [emailPlaceholder, setEmailPlaceholder] = React.useState('Email');
  const [passwordPlaceholder, setPasswordPlaceholder] = React.useState('Senha');
  const [confirmPlaceholder, setConfirmPlaceholder] =
    React.useState('Confirmar a senha');

  const [nameInputColor, setNameInputColor] = React.useState('#636973');
  const [emailInputColor, setEmailInputColor] = React.useState('#636973');
  const [passwordInputColor, setPasswordInputColor] = React.useState('#636973');
  const [confirmInputColor, setConfirmInputColor] = React.useState('#636973');

  const onSignUpPressed = async () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    if (inputsValiation() === true) {
      try {
        const res = await api.post('/api/auth/signup', user);
        if (res.status === 201) {
          Alert.alert('Cadastrado');
        }
        if (res.status === 208) {
          Alert.alert('Email já cadastrado');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const inputsValiation = () => {
    const validate = new InputValitation();
    let status = false;
    if (name !== '') {
      status = true;
    } else {
      status = false;
      setNamePlaceholder('Insira seu nome');
      setNameInputColor('#FF4747');
    }

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

    if (
      passwordConfirm !== '' &&
      validate.confirmPassword(password, passwordConfirm)
    ) {
      status = true;
    } else {
      status = false;
      setPasswordConfirm('');
      setConfirmPlaceholder('Senhas não coincidem');
      setConfirmInputColor('#FF4747');
    }

    return status;
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.titleText}>Faça parte</Text>
      <View style={styles.inputsDisplay}>
        <CustomTextInput
          placeHolder={namePlaceholder}
          value={name}
          setValue={setName}
          placeholderTextColor={nameInputColor}
        />
      </View>
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
      <View style={styles.inputsDisplay}>
        <CustomTextInput
          placeHolder={confirmPlaceholder}
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          placeholderTextColor={confirmInputColor}
          isPassword={true}
        />
      </View>
      <View style={styles.submitButton}>
        <SubmitButton onPress={onSignUpPressed} text="avançar" />
      </View>
      <View style={styles.bottomTextDisplay}>
        <Text style={styles.normalText}>
          Ao se registrar, você confirma que aceita nossos
        </Text>
        <Text style={styles.linkText}> Termos de Uso</Text>
        <Text style={styles.normalText}> e </Text>
        <Text style={styles.linkText}>Política dde Privacidade</Text>
        <Text style={styles.normalText}>.</Text>
      </View>
    </View>
  );
};
