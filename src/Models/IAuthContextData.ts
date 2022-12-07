import {IAuthData} from './IAuthData';

export interface IAuthContextData {
  authData?: IAuthData;
  signIn: (email: string, password: string) => {};
  signOut: () => Promise<void>;
}
