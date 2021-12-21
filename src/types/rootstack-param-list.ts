import {NavigatorScreenParams} from '@react-navigation/core';
import AppDrawerParamList from './appdrawer-param-list';
import AuthStackParamList from './authstack-param-list';

type RootStackParamList = {
  ResolveAuthScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  AppDrawer: NavigatorScreenParams<AppDrawerParamList>;
  Notifications: undefined;
  Messanger: undefined;
  Rating: {name: string};
};

export default RootStackParamList;
