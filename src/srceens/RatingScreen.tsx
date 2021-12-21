import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import AppDrawerParamList from '../types/appdrawer-param-list';
import RootStackParamList from '../types/rootstack-param-list';
type Props = StackScreenProps<RootStackParamList, 'Rating'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function RatingScreen() {
  return (
    <Center>
      <Text>RatingScreen</Text>
    </Center>
  );
}

const styles = StyleSheet.create({});
