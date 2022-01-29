import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {running_bus_gif} from '../assets';
import Circle from '../components/Circle';
import SignInForm from '../components/signin-form';
import useAuthHookContext from '../contexts/auth-context';
import {useCounterHookContext} from '../contexts/counter-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStackParamList from '../types/authstack-param-list';
import {SimpleStrCheck} from '../utils/regex-check';
import {useNavigationContainerRef} from '@react-navigation/core';
type Props = StackScreenProps<AuthStackParamList, 'SignInScreen'>;
type navigation = Props['navigation'];
type route = Props['route'];
export default function SignInScreen(props: Props) {
  const [username, setUsername] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [isKeyboardOpen, setIsKeyboardOpen] = React.useState<Boolean>(false);

  React.useEffect(() => {
    const keyboardDidShowEvent = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const keyboardDidHideEvent = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });
    return () => {
      Keyboard.removeAllListeners('keyboardDidShowEvent');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.white,
      }}>
      <SignInForm
        onUsernameTextChange={setUsername}
        onPasswordTextChange={setpassword}
        usernameValue={username}
        passwordValue={password}
        onForgetPasswordPress={() => {
          console.log('forget pass');
        }}
        onSignIn={() => {}}
      />
      <Circle
        style={{
          backgroundColor: Colors.primary,
          position: 'absolute',
          left: -54.92,
          top: -123,
        }}
      />
      <Circle
        style={{
          backgroundColor: Colors.primary,
          opacity: 0.5,
          position: 'absolute',
          left: -98.81,
          top: -54.46,
        }}
      />
      {isKeyboardOpen || (
        <Image
          style={{
            height: 180,
            width: '100%',
            position: 'absolute',
            bottom: 0,
          }}
          resizeMode={'cover'}
          source={{uri: running_bus_gif}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
