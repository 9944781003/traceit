import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Center from '../components/Center';
import useAuthHookContext from '../contexts/auth-context';
import AuthStackParamList from '../types/authstack-param-list';
type Props = StackScreenProps<AuthStackParamList, 'ResolveAuthScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];

export default function ResolveAuthScreen(props: Props) {
  const {tryLocalSignIn} = useAuthHookContext();
  React.useEffect(() => {
    tryLocalSignIn();
  }, []);
  return (
    <View>
      <Text>ResolveAuthScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
