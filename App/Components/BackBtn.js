import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Appcolor from '../Appcolor.js';
const BackBtn = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="arrowleft" size={20} color={Appcolor.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolor.lightGray,
    borderRadius: 40,
  },
});

export default BackBtn;