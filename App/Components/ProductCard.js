import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const ProductCard = ({ product, onPress }) => {
  console.log(product);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.img} source={{ uri: product?.images[0].url }} />
        <AppText numberOfLines={2} style={styles.text} font='Montserrat_600SemiBold'>{product?.name}</AppText>

        <AppText style={styles.price} font='Montserrat_600SemiBold'>{`$${product?.price}`}</AppText>
      </TouchableOpacity>
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