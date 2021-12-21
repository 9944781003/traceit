import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import BridgeStackParamList from '../types/bridgestack-param-list';
type Props = StackScreenProps<BridgeStackParamList, 'BrideListScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function BridgeListScreen(props: Props) {
  return (
    <Center>
      <Text>Bridge List Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
