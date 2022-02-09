import React from 'react';
import { View, StyleSheet } from 'react-native';
import Bagicon from '../../assets/Bagicon.js';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const AppButton = ({ title = 'Save', style, Icon }) => {
  return (
    <View style={[styles.container, style]}>
      <AppText font='Montserrat_600SemiBold' style={styles.text}>{title}</AppText>
      <View style={styles.iconContainer}>
        {Icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Appcolor.primary,
    height: 70,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    backgroundColor: Appcolor.secondary,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    width: 70,
  },
  icon: {
    color: Appcolor.white,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: Appcolor.white,
    fontSize: 18,
  }
});

export default AppButton;