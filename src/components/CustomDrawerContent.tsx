import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContent,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import AppDrawerParamList from '../types/appdrawer-param-list';

// type Props = DrawerScreenProps<AppDrawerParamList>;

export default function CustomDrawerHeader(props: DrawerContentComponentProps) {
  function ContentHeader() {
    return (
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
    );
  }
  function ContentFooter() {
    return (
      <View style={styles.footer}>
        <Text>version 1.0</Text>
        <Pressable>
          <Text>Signout</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <ContentHeader />
      <DrawerContentScrollView style={{borderWidth: 5}} {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <ContentFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {height: 150},
  body: {flex: 1},
  footer: {
    height: 32,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 4,
    flexDirection: 'row',
  },
});
