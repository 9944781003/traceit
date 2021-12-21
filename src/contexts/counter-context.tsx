import React from 'react';
import {PushNotificationIOS} from 'react-native';
import {createContextHook} from './create-data-hook';

// 1. Create your custom hook
type UseMyCustomHookProps = {
  someInitialValue: number;
};

export type CounterActionType = {
  type: 'ADD';
  payload: number;
};

function useMyCustomeHook(props: UseMyCustomHookProps) {
  const [state, dispatch] = React.useReducer(
    (state: number, action: CounterActionType) => {
      switch (action.type) {
        case 'ADD':
          return state + action.payload;
        default:
          return state;
      }
    },
    props.someInitialValue,
  );

  const printCounter = () => {
    console.log('Counter printing' + state.toString());
  };
  return {state, dispatch};
}

const [CounterHookProvider, useCounterHookContext] = createContextHook<
  ReturnType<typeof useMyCustomeHook>,
  UseMyCustomHookProps
>(useMyCustomeHook, {
  name: 'CounterHook',
});

export {CounterHookProvider, useCounterHookContext};
