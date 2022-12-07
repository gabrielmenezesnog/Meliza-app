import {api} from '../api/apiManager';
import {IAuthData} from '../Models/IAuthData';

async function SignIn(
  email: string,
  password: string,
): Promise<IAuthData | undefined> {
  try {
    const res = await api.post('/api/auth/login', {email, password});
    if (res.status === 200) {
      return {
        accessToken: res.data.accessToken,
        tokenType: res.data.tokenType,
        id: res.data.id,
        email: res.data.email,
        status: res.status,
      };
    }
  } catch (error: any) {
    if (error.response.data.status === 401) {
      return {
        message: error.response.data.error,
        status: error.response.data.status,
      };
    }
    if (error.response.data.status === 403) {
      return {
        message: error.response.data.error,
        status: error.response.data.status,
      };
    } else {
      return {
        message: error.response.data.error,
        status: error.response.data.status,
      };
    }
  }
}

export const authService = {SignIn};
