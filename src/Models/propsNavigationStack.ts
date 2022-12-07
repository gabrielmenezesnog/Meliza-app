import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  DashBoard: undefined;
  Schedules: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
