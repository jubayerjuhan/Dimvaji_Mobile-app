import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';
import IncrementDecrement from './IncrementDecrement.js';
import DeleteIcon from '../../assets/DeleteIcon.js';
import { useDispatch } from 'react-redux';
import { addToCart, deleteCartItem } from '../Redux/Actions/cartaction.js';


const HorizontalCard = ({ noBtn, product }) => {
  const dispatch = useDispatch();
  const handlePlus = () => {
    // setQuantity(quantity + 1);
    dispatch(addToCart(product, product.quantity + 1));
  }

  const handleMinus = () => {
    // setQuantity(quantity - 1);
    dispatch(addToCart(product, product.quantity - 1));
  }

  const handleDelete = () => {
    dispatch(deleteCartItem(product));
  }
  console.log(product)
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={{ width: '70%' }}>
        <AppText style={styles.title} font='Montserrat_500Medium'>{product?.name}</AppText>
        <AppText style={styles.price} font='Montserrat_600SemiBold'>{`$${product.price}`}</AppText>
        {noBtn ? null : (
          <View style={styles.actions}>
            <TouchableOpacity style={styles.icon} onPress={handleDelete}>
              <DeleteIcon size={30} />
              <AppText>Remove</AppText>
            </TouchableOpacity>
            <IncrementDecrement quantity={product.quantity} handleMinus={handleMinus} handlePlus={handlePlus} />
          </View>
        )}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    width: '100%',
    overflow: 'hidden',

    padding: Globalstyle.paddingMedium,
    flexDirection: 'row',
    borderRadius: 16,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 19,
    color: Appcolor.primary,
    lineHeight: 25,
  },
  price: {
    marginTop: Globalstyle.padding5,
    fontSize: 22,
    color: Appcolor.yellow,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Globalstyle.paddingSmall,
  },

  image: {
    borderRadius: 16,
    marginRight: Globalstyle.paddingSmall,
    height: 100,
    width: 100,
  }
});

export default HorizontalCard;