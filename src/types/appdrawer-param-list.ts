import {NavigatorScreenParams} from '@react-navigation/core';
import BridgeStackParamList from './bridgestack-param-list';

type AppDrawerParamList = {
  MapScreen: undefined;
  BridgeStack: NavigatorScreenParams<BridgeStackParamList>;
  ComplaintsScreen: undefined;
  HelpCenterScreen: undefined;
  SettingScreen: undefined;
};

export default AppDrawerParamList;
