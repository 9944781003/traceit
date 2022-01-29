import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import RootStackParamList from '../types/rootstack-param-list';
type Props = StackScreenProps<RootStackParamList, 'Notifications'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function NotificationListScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Notification List Screen</Text>
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
