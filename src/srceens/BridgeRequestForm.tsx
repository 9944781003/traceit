import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import BridgeStackParamList from '../types/bridgestack-param-list';
type Props = StackScreenProps<BridgeStackParamList, 'BrideRequestScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function BridgeRequestScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Bridge Request Screen</Text>
      </Center>
      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
