import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import AppDrawerParamList from '../types/appdrawer-param-list';
import RootStackParamList from '../types/rootstack-param-list';
type Props = StackScreenProps<RootStackParamList, 'Notifications'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function NotificationListScreen() {
  return (
    <Center>
      <Text>Notification List Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
