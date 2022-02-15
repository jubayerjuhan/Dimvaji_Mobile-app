import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import CheckoutIcon from '../../assets/CheckoutIcon.js';
import Appcolor from '../Appcolor.js';
import AppButton from '../Components/AppButton.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import HorizontalCard from '../Components/HorizontalCard.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';

const Cartscreen = ({ navigation }) => {
  const { cartItems } = useSelector(state => state.cart);

  // calculate total price
  const calculatePrice = () => {
    cartItems.forEach(item => {
      quantity += item.quantity;
      total += item.quantity * item.price;
    });
    return total;
  }

  let total = 0;
  let quantity = 0;
  calculatePrice()

  return (
    <Screen>
      <AppHeader title={"Cart"} navigation={navigation} />
      {cartItems.length === 0 ?
        <View style={styles.container}>
          <Image source={require('../../assets/empty-cart.png')} style={styles.image} />
          <AppText>No Item's On Cart</AppText>
        </View>
        :
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            data={cartItems}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => <HorizontalCard product={item} />}
          />
          <View style={styles.bottom}>
            <View style={styles.textContainer}>
              <AppText style={styles.bottomText}>Product Quantity</AppText>
              <AppText style={styles.bottomText} font='Montserrat_700Bold'>{quantity}</AppText>
            </View>
            <View style={styles.textContainer}>
              <AppText style={styles.bottomText}>Product Price</AppText>
              <AppText style={styles.price} font='Montserrat_700Bold'>{`$${total}`}</AppText>
            </View>
            <AppButton Icon={<CheckoutIcon />} title='Checkout' handlePress={() => navigation.navigate('Checkout', { quantity, total })} />
          </View>
        </>
      }
    </Screen >
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
    marginBottom: 200,
    paddingHorizontal: Globalstyle.paddingMedium,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 20,
  },
  image: {
    width: 200,
    height: 200
    // width: '100%',
  },
  bottom: {
    padding: Globalstyle.paddingLarge,
    backgroundColor: Appcolor.white,
    elevation: 10,
    borderRadius: 16,
    position: 'absolute',
    bottom: 0,
    minHeight: 100,
    width: "100%",
  },
  bottomText: {
    fontSize: 16,
    lineHeight: 20,
    color: Appcolor.secondary,
  },
  price: {
    fontSize: 26,
    color: Appcolor.yellow,
  },
  textContainer: {
    marginVertical: Globalstyle.paddingSmall,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Cartscreen;