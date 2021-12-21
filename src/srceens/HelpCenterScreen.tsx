import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import AppDrawerParamList from '../types/appdrawer-param-list';
type Props = StackScreenProps<AppDrawerParamList, 'HelpCenterScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function HelpCenterScreen() {
  return (
    <Center>
      <Text>Help Center Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
