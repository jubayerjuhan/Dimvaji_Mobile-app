import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const ProductCard = ({ product, onPress }) => {

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
    maxWidth: 150,
    padding: 12,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 12,
  },
  text: {
    color: Appcolor.primary,
    paddingTop: Globalstyle.paddingSmall,
    fontSize: 14,
  },
  price: {
    color: Appcolor.yellow,
    marginTop: Globalstyle.paddingSmall,
    fontSize: 20,
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 12,
  },
});

export default ProductCard;