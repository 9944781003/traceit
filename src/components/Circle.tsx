import React from 'react';
import {StyleSheet, Text, View, ViewProps} from 'react-native';

export default function Circle({style, children, ...props}: ViewProps) {
  return (
    <View {...style} style={styles.wrapper}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 212,
    width: 212,
    borderRadius: 150,
  },
});
