import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import AuthStackParamList from '../types/authstack-param-list';
type Props = StackScreenProps<AuthStackParamList, 'UserProfileScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];
export default function UserProfileScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>User Profile Screen</Text>
      </Center>
      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
