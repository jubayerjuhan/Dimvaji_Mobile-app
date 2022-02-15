import React from 'react';
import { View, StyleSheet } from 'react-native';
import EditIcon from '../../assets/EditIcon.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Appcolor from '../Appcolor.js';
import { Ionicons } from '@expo/vector-icons';

const CheckoutCTA = ({ title, editable, address, items, style, payment, handlePress }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <AppText style={styles.title} font='Montserrat_600SemiBold'>{title}</AppText>
        {editable && <MaterialCommunityIcons onPress={() => handlePress(payment, address)} name="circle-edit-outline" size={30} color={Appcolor.primary} />}
      </View>

      {address && (
        <View style={styles.cardwrapper}>
          <AppText style={styles.cardText} >{address.name ? address.name : 'Enter Your Shipping Details'}</AppText>
          <AppText style={styles.cardText} >{address?.street}</AppText>
          <AppText style={styles.cardText} >{address.area}</AppText>
          <AppText style={styles.cardText} >{address.phone}</AppText>
        </View>
      )}
      {items && (
        <View style={styles.cardwrapper}>
          <View style={[styles.header, {
            marginBottom: Globalstyle.padding5
          }]}>
            <AppText style={styles.cardText} >Product Quantity</AppText>
            <AppText font='Montserrat_600SemiBold' style={styles.cardText} >{items.quantity}</AppText>
          </View>
          <View style={[styles.header, {
            marginBottom: Globalstyle.padding5
          }]}>
            <AppText style={styles.cardText} >Total Price</AppText>
            <AppText font='Montserrat_600SemiBold' style={styles.cardText} >{`$${items.total}`}</AppText>
          </View>
        </View>
      )}

      {payment && (
        <View style={styles.payment}>
          <Ionicons style={styles.icon} name="cash" size={24} color='#089816' />
          <AppText style={styles.cardText} >Cash On Delivery</AppText>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: Globalstyle.paddingLarge,
    elevation: 2.1,
  },

  cardText: {
    fontFamily: 'Montserrat_300Light',
    fontSize: 18,
    lineHeight: 24,
    color: Appcolor.tertiary,
  },
  cardwrapper: {
    marginTop: Globalstyle.paddingLarge,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    lineHeight: 22,
    color: Appcolor.primary,
  },
  payment: {
    marginTop: Globalstyle.paddingLarge,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: Globalstyle.paddingMedium,
  }
});

export default CheckoutCTA;