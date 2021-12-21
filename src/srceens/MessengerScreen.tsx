import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import RootStackParamList from '../types/rootstack-param-list';
type Props = StackScreenProps<RootStackParamList, 'Messanger'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function MessengerScreen() {
  return (
    <Center>
      <Text>Message Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
