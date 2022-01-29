import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import AppDrawerParamList from '../types/appdrawer-param-list';
type Props = StackScreenProps<AppDrawerParamList, 'SettingScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function SettingScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Settings Screen</Text>
      </Center>
      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
