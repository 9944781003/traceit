import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Center from '../components/Center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthHookContext from '../contexts/auth-context';
import AppDrawerParamList from '../types/appdrawer-param-list';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import FooterTabs from '../components/FooterTabs';
import {Header} from '@react-navigation/elements';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerActions} from '@react-navigation/routers';
import {navigationRef} from '../utils/navigationRef';

type Props = StackScreenProps<AppDrawerParamList, 'MapScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function MapScreen() {
  const {SignOut} = useAuthHookContext();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        headerBackgroundContainerStyle={{
          backgroundColor: Colors.primary,
          height: 56,
        }}
        headerStyle={{
          backgroundColor: Colors.primary,
        }}
        headerTintColor={Colors.white}
        title={'MapBox'}
        headerLeft={() => (
          <MaterialCommunityIcon
            onPress={() => {
              navigationRef.dispatch(DrawerActions.toggleDrawer());
            }}
            style={{marginLeft: 8}}
            name="menu"
            color={Colors.white}
            size={28}
          />
        )}
      />

      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footerTab: {
    position: 'absolute',
    bottom: 0,
  },
});
