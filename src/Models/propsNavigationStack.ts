import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Patients: undefined;
  Plans: undefined;
  Profile: undefined;
  Consultations: undefined;
  Schedules: undefined;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
