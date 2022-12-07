import {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import {IAuthContextData} from '../Models/IAuthContextData';
import {IAuthData} from '../Models/IAuthData';
import {authService} from '../services/AuthService';

interface Props {
  children: React.ReactNode;
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData,
);

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [authData, setAuthData] = useState<IAuthData>();

  async function signIn(
    email: string,
    password: string,
  ): Promise<IAuthData | undefined> {
    const auth = await authService.SignIn(email, password);

    if (auth?.status === 200) {
      console.log(auth);
      //setAuthData(auth);
    }
    if (auth?.status === 401 || auth?.status === 403) {
      Alert.alert('Email ou senha incorretos');
    }

    return auth;
  }
  async function signOut(): Promise<void> {
    setAuthData(undefined);
  }
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{authData, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
