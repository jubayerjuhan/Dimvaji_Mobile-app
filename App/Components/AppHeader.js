import { useNavigationState } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';
import BackBtn from './BackBtn.js';
import Screen from './Screen.js';

const AppHeader = ({ abselute, style, title, navigation }) => {
  // const navigation = useNavigationState(getState());
  // console.log(navigation, 'navigation');
  // console.log('navigation');
  return (
    <View style={[styles.header, style, {

      position: abselute ? 'absolute' : 'relative',
      top: abselute ? 40 : null,
    }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackBtn />
      </TouchableOpacity>
      <AppText style={styles.headerName}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: Globalstyle.paddingSmall,
    paddingVertical: Globalstyle.paddingSmall,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  headerName: {
    color: Appcolor.primary,
    marginLeft: 10,
  }
});

export default AppHeader;