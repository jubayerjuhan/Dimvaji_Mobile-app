import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Modal, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Appcolor from '../Appcolor.js';
import AppButton from '../Components/AppButton.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import PaymentForm from '../Components/Checkout/PaymentForm.js';
import CheckoutCTA from '../Components/CheckoutCTA.js';
import CheckoutForms from '../Components/CheckoutForms.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import WalletIcon from './WalletIcon.js';
import CustomAlert from '../Components/CustomAlert.js'


const CheckoutScreen = ({ navigation, route }) => {
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    message: ''
  })
  const handleEditPress = (payment, address) => {
    setModal(true);
    setModalName(payment ? 'Payment' : 'Address');
  }
  const { shippingInfo } = useSelector(state => state.cart);
  const { quantity, total } = route.params;

  const handlePlaceOrder = () => {
    if (!shippingInfo) return setAlert({ ...alert, visible: true, message: 'Please Enter Shipping Info' })
    console.log('Order Placed')
  }

  // handleCLose alert
  const closeAlert = () => {
    setAlert({ ...alert, visible: false, message: null })
  }

  return (
    <Screen style={styles.container}>
      <CustomAlert message={alert.message} visible={alert.visible} onPress={closeAlert} />
      <AppHeader style={styles.header} navigation={navigation} title="Checkout" />
      <CheckoutCTA handlePress={handleEditPress} address={shippingInfo} style={styles.card} editable title='Shipping Address' />
      <CheckoutCTA style={styles.card} title='Items Order' items={{ quantity, total }} />
      <CheckoutCTA handlePress={handleEditPress} editable={false} style={styles.card} title='Payment' payment />

      <View style={styles.bottom}>
        <View style={styles.price}>
          <AppText style={styles.text}>Total Price</AppText>
          <AppText style={styles.price} font='Montserrat_700Bold'>{`$${total}`}</AppText>
        </View>
        <AppButton Icon={<WalletIcon />} title='Place Order' handlePress={handlePlaceOrder} />
      </View>

      {/*  */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
      >
        <View
          style={styles.modal}
        >
          {modalName === 'Address' && <CheckoutForms setModal={setModal} />}
          {modalName === 'Payment' && <PaymentForm setModal={setModal} />}
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Globalstyle.paddingLarge,
  },
  header: {
    paddingHorizontal: 0,
  },
  modal: {
    padding: Globalstyle.paddingLarge,
    // height: "50%",
    backgroundColor: "white",
    elevation: 10,
    borderColor: Appcolor.primary,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderRadius: 16,
  },
  price: {
    marginVertical: Globalstyle.paddingSmall,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 26,
    color: Appcolor.yellow,
  },
  text: {
    fontSize: 20,
  },
  card: {
    marginVertical: Globalstyle.paddingSmall,
  },
  bottom: {
    padding: Globalstyle.paddingLarge,
    width: Dimensions.get('window').width,
    bottom: 0,
    position: 'absolute',
    minHeight: Globalstyle.paddingLarge,
    backgroundColor: Appcolor.white,

  }
});

export default CheckoutScreen;