import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Appcolor from '../Appcolor.js';
import AppText from './AppText.js';

const IncrementDecrement = ({ handlePlus, handleMinus, quantity }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleMinus}>
        <View style={[styles.fill, { backgroundColor: Appcolor.lightGray }]}><AppText style={[styles.text, { color: Appcolor.primary }]}>-</AppText></View>
      </TouchableWithoutFeedback>
      <AppText font='Montserrat_500Medium' style={[styles.text, styles.quantity]}>{quantity}</AppText>

      <TouchableWithoutFeedback onPress={handlePlus}>
        <View style={styles.fill}><AppText style={styles.text}>+</AppText></View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  fill: {
    height: 35,
    width: 35,
    backgroundColor: Appcolor.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  quantity: {
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
    color: Appcolor.primary,
    fontSize: 20,
    textAlign: 'center',
    // paddingHorizontal: 10,
  },
  text: {
    color: Appcolor.white,
    fontSize: 24,
    alignSelf: 'center',

  }
});

export default IncrementDecrement;