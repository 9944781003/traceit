import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import ResolveAuthScreen from '../srceens/ResolveAuthScreen';
import SignInScreen from '../srceens/SiginInScreen';
import UserProfileScreen from '../srceens/UserProfileScreen';
import AuthStackParamList from '../types/authstack-param-list';

const Stack = createStackNavigator<AuthStackParamList>();
type Props = StackScreenProps<AuthStackParamList>;

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ResolveAuthScreen" component={ResolveAuthScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
    </Stack.Navigator>
  );
}
