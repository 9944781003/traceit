import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {CounterHookProvider} from './src/contexts/counter-context';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import RootStackParamList from './src/types/rootstack-param-list';
import {navigationRef} from './src/utils/navigationRef';

LogBox.ignoreLogs(['Reanimated 2']);
export default function App() {
  return (
    <CounterHookProvider someInitialValue={1}>
      <NavigationContainer ref={navigationRef}>
        <RootStackNavigator />
      </NavigationContainer>
    </CounterHookProvider>
  );
}

const styles = StyleSheet.create({});
function useNavigationContainerRef() {
  throw new Error('Function not implemented.');
}
