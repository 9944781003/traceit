import React from 'react';
import {View, Text} from 'react-native';

type CenterProps = {
  children?: JSX.Element | JSX.Element[];
};
export default (Props: CenterProps) => (
  <View>{Props.children ? Props.children : null}</View>
);
