import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Bagicon from '../../assets/Bagicon.js';
import Appcolor from '../Appcolor.js';
import AppButton from '../Components/AppButton.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import BackBtn from '../Components/BackBtn.js';
import CustomAlert from '../Components/CustomAlert.js';
import DescriptionComponent from '../Components/DescriptionComponent.js';
import IncrementDecrement from '../Components/IncrementDecrement.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import { addToCart } from '../Redux/Actions/cartaction.js';


const ProductDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state.cart);
  const windowWidth = Dimensions.get('window').width;
  const { product } = route.params;
  const [showModal, setShowModal] = useState(false)
  const [quantity, setQuantity] = useState(1);


  const handleAddToCart = () => {
    // dispatch({ type: 'ADD_TO_CART', payload: product });
    dispatch(addToCart(product, quantity));
    setShowModal(true)
  }

  const handleToCart = () => {
    navigation.navigate('Cart');
  }

  const handlePlus = () => {
    if (quantity === product.stock) return
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }


  return (
    <Screen style={styles.container}>
      <CustomAlert message='Product Added To Cart'
        onPress={() => setShowModal(false)}
        onPressSec={handleToCart}
        visible={showModal} />

      <Image style={styles.image, { width: '100%', height: windowWidth }} source={{ uri: product.images[0].url }} />
      <AppText font='Montserrat_600SemiBold' style={styles.title}>{product.name}</AppText>
      <DescriptionComponent title='Description' description={product.description} />

      <View style={styles.bottombtn}>
        <IncrementDecrement quantity={quantity} handlePlus={handlePlus} handleMinus={handleMinus} />
        <AppButton style={styles.btn} title={`$${product.price}`} handlePress={handleAddToCart} Icon={<Bagicon color={Appcolor.white} />} />
      </View>
      <AppHeader navigation={navigation} abselute title={product.name} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  title: {
    fontSize: 24,
    padding: Globalstyle.paddingMedium,
    color: Appcolor.primary
  },
  bottombtn: {
    // position
    position: 'absolute',
    width: '100%',
    backgroundColor: Appcolor.white,
    bottom: 0,
    padding: Globalstyle.paddingMedium,
    elevation: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

});

export default ProductDetailScreen;