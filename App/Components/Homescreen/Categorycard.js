import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../AppText.js';

const Categorycard = ({ title, style, large }) => {
  return (
    <View style={[{ width: large ? 250 : 150, height: large ? 120 : 70 }, styles.container, style]}>
      <AppText font='Montserrat_600SemiBold' style={[{
        fontSize: large ? 16 : 12,
        bottom: large ? 20 : 12,
        left: large ? 20 : 12,
      }, styles.text]} >{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "linear-gradient(90deg, rgba(0, 0, 0, 0.46) -1.5%, rgba(0, 0, 0, 0.32) 47.67%, rgba(0, 0, 0, 0.16) 64.23%, rgba(0, 0, 0, 0) 100%)",
    borderRadius: 12,
  },
  text: {
    color: 'white',
    position: 'absolute',

  }
});

export default Categorycard;