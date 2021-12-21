import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import BridgeDetailScreen from '../srceens/BridgeDetailScreen';
import BridgeListScreen from '../srceens/BridgeListScreen';
import BridgeRequestScreen from '../srceens/BridgeRequestForm';
import BridgeStackParamList from '../types/bridgestack-param-list';

const Stack = createStackNavigator<BridgeStackParamList>();
type Props = StackScreenProps<BridgeStackParamList>;

export default function BridgeStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BrideListScreen" component={BridgeListScreen} />
      <Stack.Screen name="BrideDetailsScreen" component={BridgeDetailScreen} />
      <Stack.Screen name="BrideRequestScreen" component={BridgeRequestScreen} />
    </Stack.Navigator>
  );
}
