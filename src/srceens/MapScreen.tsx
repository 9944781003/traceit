import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAuthHookContext from '../contexts/auth-context';
import AppDrawerParamList from '../types/appdrawer-param-list';

type Props = StackScreenProps<AppDrawerParamList, 'MapScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function MapScreen() {
  const {SignOut} = useAuthHookContext();
  React.useEffect(() => {
    AsyncStorage.getItem('token').then(res => {
      console.log('token from mapscreen' + res);
    });
  }, []);
  return (
    <Center>
      <Text>Map Screen</Text>

      <Button
        title="SignOUT"
        onPress={() => {
          SignOut();
        }}
      />
    </Center>
  );
}

const styles = StyleSheet.create({});