import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const ProductCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg' }} />
      <AppText numberOfLines={2} style={styles.text} font='Montserrat_600SemiBold'>Adidas Super Star New York Edition Of The Year</AppText>

      <AppText style={styles.price} font='Montserrat_600SemiBold'>$120</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 175,
    padding: 12,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 12,
  },
  text: {
    color: Appcolor.primary,
    paddingTop: Globalstyle.paddingSmall,
    fontSize: 16,
  },
  price: {
    color: Appcolor.yellow,
    marginTop: Globalstyle.paddingSmall,
    fontSize: 25,
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 12,
  },
});

export default ProductCard;