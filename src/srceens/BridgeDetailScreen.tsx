import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import BridgeStackParamList from '../types/bridgestack-param-list';
type Props = StackScreenProps<BridgeStackParamList, 'BrideDetailsScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function BridgeDetailScreen() {
  return (
    <Center>
      <Text>Bridge Details Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
