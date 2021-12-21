import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import AuthStackParamList from '../types/authstack-param-list';
type Props = StackScreenProps<AuthStackParamList, 'UserProfileScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];
export default function UserProfileScreen() {
  return (
    <Center>
      <Text>User Profile Screen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
