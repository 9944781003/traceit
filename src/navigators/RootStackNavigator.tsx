import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MessengerScreen from '../srceens/MessengerScreen';
import NotificationListScreen from '../srceens/NotificationListScreen';
import RatingScreen from '../srceens/RatingScreen';
import ResolveAuthScreen from '../srceens/ResolveAuthScreen';
import RootStackParamList from '../types/rootstack-param-list';
import AppDrawerNavigator from './AppDrawerNavigator';
import AuthStackNavigator from './AuthStackNavigator';
const Stack = createStackNavigator<RootStackParamList>();

type Props = StackScreenProps<RootStackParamList>;
export default function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ResolveAuthScreen" component={ResolveAuthScreen} />
      <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
      <Stack.Screen name="AppDrawer" component={AppDrawerNavigator} />
      <Stack.Screen name="Notifications" component={NotificationListScreen} />
      <Stack.Screen name="Messanger" component={MessengerScreen} />
      <Stack.Screen name="Rating" component={RatingScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
