import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Appcolor from '../Appcolor.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import HorizontalCard from '../Components/HorizontalCard.js';
import LottieViewer from '../Components/LottieView.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import { getUserOrder } from '../Redux/Actions/orderaction.js';


const OrderScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector(state => state.myOrder);
  useEffect(() => {
    dispatch(getUserOrder());
  }, []);


  console.log(orders?.length, 'orderScreen');
  return (
    <Screen style={styles.container}>
      <AppHeader title={'Orders'} navigation={navigation} />
      {loading ? (
        <View style={styles.loading}>
          <LottieViewer
            style={{ height: 300, width: '100%' }}
            source={require('../../assets/loading-cart.json')} />
        </View>) :
        <FlatList
          style={styles.list}
          data={orders}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          separatorStyle={styles.separator}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <OrderCard order={item} />}
        />
      }

    </Screen>
  );
}

const OrderCard = ({ order }) => {
  console.log(order, 'orderCard');
  if (!order) return null;
  return (
    <View style={styles.card}>
      <Image source={{ uri: order?.orderItems[0]?.image }} style={styles.image} />
      <View style={styles.cardTextContainer}>
        <AppText style={styles.title}>Order: #{order._id}</AppText>
        <AppText font="Montserrat_600SemiBold" style={styles.price}>{`$${order?.priceBreakdown?.totalPrice}`}</AppText>
        <AppText style={styles.description}>Order Status: {order.orderStatus}</AppText>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  cardTextContainer: {
    width: '100%',
  },
  separator: {
    height: 10,
  },
  description: {
    fontSize: 12,
    color: Appcolor.grey,
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    overflow: 'scroll',
    color: Appcolor.primary,
  },
  price: {
    fontSize: 26,
    marginTop: 10,
    color: Appcolor.yellow,
  },
  list: {
    padding: Globalstyle.paddingLarge
  },
  card: {
    flexDirection: 'row',
    padding: Globalstyle.paddingMedium,
    borderColor: Appcolor.lightGray,
    borderWidth: 1,
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
    marginRight: 10,
    height: 100,
    width: 100,
  }
});

export default OrderScreen;