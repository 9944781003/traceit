import React from 'react';
import {View, Text} from 'react-native';

function useCustomHook(name: string) {
  const [state, setState] = React.useState('');

  const modify: (() => void | string) | string = () => {
    console.log('called');
    setState('heioo');
  };

  React.useEffect(() => {
    setState(name);
  }, [name]);

  return [state, modify];
}

export default useCustomHook;
