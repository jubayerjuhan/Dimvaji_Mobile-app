import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';
import IncrementDecrement from './IncrementDecrement.js';
import DeleteIcon from '../../assets/DeleteIcon.js';
import { useDispatch } from 'react-redux';
import { addToCart, deleteCartItem } from '../Redux/Actions/cartaction.js';


const HorizontalCard = ({ noBtn, product, onPress }) => {
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
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{ uri: product?.image || product?.images[0]?.url }} />
        </View>
        <View style={{ width: '70%' }}>
          <AppText style={styles.title} font='Montserrat_500Medium'>{product?.name}</AppText>
          <AppText style={styles.price} font='Montserrat_600SemiBold'>{`$${product?.price}`}</AppText>
          {noBtn ? null : (
            <View style={styles.actions}>
              <TouchableOpacity style={styles.icon} onPress={handleDelete}>
                <DeleteIcon size={20} />
                <AppText style={{ fontSize: 12 }}>Remove</AppText>
              </TouchableOpacity>
              <IncrementDecrement quantity={product?.quantity} handleMinus={handleMinus} handlePlus={handlePlus} />
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    // shadow
    borderColor: Appcolor.lightGray,
    borderWidth: 1,

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
    fontSize: 14,
    color: Appcolor.primary,
    lineHeight: 25,
  },
  price: {
    marginTop: Globalstyle.padding5,
    fontSize: 20,
    color: Appcolor.yellow,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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