import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import AppDrawerParamList from '../types/appdrawer-param-list';
type Props = StackScreenProps<AppDrawerParamList, 'HelpCenterScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function HelpCenterScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Help center Screen</Text>
      </Center>
      <FooterTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
