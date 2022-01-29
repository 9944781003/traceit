import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import FooterTabs from '../components/FooterTabs';
import AppDrawerParamList from '../types/appdrawer-param-list';
import RootStackParamList from '../types/rootstack-param-list';
type Props = StackScreenProps<RootStackParamList, 'Rating'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function RatingScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Center>
        <Text>Rating Screen</Text>
      </Center>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
