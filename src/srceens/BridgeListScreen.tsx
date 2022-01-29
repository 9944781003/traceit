import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FlipInEasyX} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import BridgeStackParamList from '../types/bridgestack-param-list';
type Props = StackScreenProps<BridgeStackParamList, 'BrideListScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function BridgeListScreen(props: Props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Bridge List Screen</Text>
      </Center>
      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
