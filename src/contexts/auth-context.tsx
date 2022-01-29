import React from 'react';
import {axiosInstance} from '../api/axios-instances';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {resolvePlugin} from '@babel/core';
import {navigationRef} from '../utils/navigationRef';
import {CommonActions} from '@react-navigation/routers';
type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  SignIn = 'AUTH_SIGNIN',
  SignOut = 'AUTH_SIGNOUT',
  LocalSignIn = 'AUTH_LOCAL_SIGNIN',
}

type AuthStateType = {
  status: 'pending' | 'fullfilled' | 'rejected';
  token: string | null;
};

type AuthPayload = {
  [Types.SignIn]: {
    status: 'pending' | 'fullfilled' | 'rejected';
    token: string;
  };
  [Types.SignOut]: {
    status: 'pending' | 'fullfilled' | 'rejected';
    token: null;
  };
  [Types.LocalSignIn]: {
    status: 'pending' | 'fullfilled' | 'rejected';
    token: string | null;
  };
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

const useAuthHookContext = () => {
  const authReducer = (state: AuthStateType, action: AuthActions) => {
    switch (action.type) {
      case Types.SignIn:
        return {
          status: action.payload.status,
          token: action.payload.token,
        } as AuthStateType;
      case Types.SignOut:
        return {
          status: action.payload.status,
          token: action.payload.token,
        } as AuthStateType;

      default:
        return state;
    }
  };

  React.createContext({status: 'pending', token: null} as AuthStateType);

  const [state, dispatch] = React.useReducer(authReducer, {
    status: 'pending',
    token: null,
  } as AuthStateType);

  function SignIn({username, password}: {username: string; password: string}) {}
  function SignOut() {
    (async () => {
      try {
        await AsyncStorage.removeItem('token').then();
        navigationRef.resetRoot({
          index: 0,
          routes: [{name: 'AuthStack'}],
        });
        dispatch({
          type: Types.SignOut,
          payload: {
            status: 'pending',
            token: null,
          },
        });
      } catch (error) {}
    })();
  }
  function tryLocalSignIn() {
    (async () => {
      try {
        let token = await AsyncStorage.getItem('token');
        if (token) {
          navigationRef.navigate('AppDrawer', {
            screen: 'MapScreen',
          });
        } else {
          navigationRef.navigate('AuthStack', {
            screen: 'SignInScreen',
          });
        }
      } catch (error) {}
    })();
  }

  return {state, SignIn, SignOut, tryLocalSignIn};
};

export default useAuthHookContext;
