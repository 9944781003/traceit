import {CompositeScreenProps} from '@react-navigation/core';
import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomDrawerHeader from '../components/CustomDrawerContent';
import ComplaintsScreen from '../srceens/ComplaintsScreen';
import HelpCenterScreen from '../srceens/HelpCenterScreen';
import MapScreen from '../srceens/MapScreen';
import SettingScreen from '../srceens/SettingScreen';
import AppDrawerParamList from '../types/appdrawer-param-list';
import BridgeStackNavigator from './BridgeStackNavigator';
const Drawer = createDrawerNavigator<AppDrawerParamList>();

type Props = DrawerScreenProps<AppDrawerParamList>;

export default function AppDrawerNavigator(props: Props) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerHeader {...props} />}
      screenOptions={{
        headerShown: false,

        drawerContentStyle: {
          borderWidth: 1,
        },
        drawerItemStyle: {
          backgroundColor: Colors.primary,
          borderRadius: 24,
        },
        drawerContentContainerStyle: {
          borderColor: 'orange',
          borderWidth: 3,
        },
        drawerActiveTintColor: 'white',
      }}>
      <Drawer.Screen name="MapScreen" component={MapScreen} />
      <Drawer.Screen name="BridgeStack" component={BridgeStackNavigator} />
      <Drawer.Screen name="ComplaintsScreen" component={ComplaintsScreen} />
      <Drawer.Screen name="HelpCenterScreen" component={HelpCenterScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
