import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import AppText from '../AppText.js';

const Categorycard = ({ title, style, large, item, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[{ width: large ? 250 : 150, height: large ? 120 : 70 }, styles.container, style]}>
        {/* <View style={[{ width: large ? 250 : 150, height: large ? 120 : 70 }, styles.container2, style]} /> */}
        <Image style={styles.img} source={item?.image} />
        <AppText font='Montserrat_600SemiBold' style={[{
          fontSize: large ? 16 : 12,
          bottom: large ? 20 : 12,
          left: large ? 20 : 12,
        }, styles.text]} >{title}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.16)",
    borderRadius: 12,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    position: 'absolute',
    elevation: 2,

  },
  img: {
    opacity: 0.6,
  }
});

export default Categorycard;