import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function FooterTabs() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchbleWrapper}>
        <MaterialCommunityIcon
          name="bell-ring-outline"
          size={24}
          color={Colors.light}
        />
        <Text style={styles.tabLabel}>Alerts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchbleWrapper}>
        <MaterialCommunityIcon
          name="message-processing-outline"
          size={24}
          color={Colors.light}
        />
        <Text style={styles.tabLabel}>Messenger</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchbleWrapper}>
        <MaterialCommunityIcon
          name="star-half-full"
          size={24}
          color={Colors.light}
        />
        <Text style={styles.tabLabel}>Reviews</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 56,
  },
  tabLabel: {
    color: Colors.white,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  touchbleWrapper: {
    alignItems: 'center',
  },
});
