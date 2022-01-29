import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import RootStackParamList from '../types/rootstack-param-list';
import {navigationRef} from '../utils/navigationRef';
type Props = StackScreenProps<RootStackParamList, 'Messanger'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function MessengerScreen(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Messenger Screen</Text>
        <Button
          title="press"
          onPress={() => {
            console.log(JSON.stringify(navigationRef.getCurrentOptions()));
          }}
        />
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
