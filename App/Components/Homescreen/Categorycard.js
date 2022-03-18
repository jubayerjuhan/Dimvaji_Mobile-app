import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import AppText from '../AppText.js';

const Categorycard = ({ title, style, large, item, onPress }) => {
  console.log(item.image);
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[{ width: large ? 250 : 150, height: large ? 120 : 70 }, styles.container, style]}>
        {/* <View style={[{ width: large ? 250 : 150, height: large ? 120 : 70 }, styles.container2, style]} /> */}
        {large && <Image style={styles.img} source={item?.image} />}
        {!large && <Image style={styles.imgSmall} source={{ uri: `${item?.image}` }} />}
        <AppText font='Montserrat_600SemiBold' style={[{
          fontSize: large ? 14 : 10,
          bottom: large ? 15 : 10,
          left: large ? 15 : 10,
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
  },
  imgSmall: {
    height: '100%',
    width: '100%',
  }
});

export default Categorycard;