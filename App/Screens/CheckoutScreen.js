import React, { useEffect, useState } from 'react';
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
import { placeOrder } from '../Redux/Actions/orderaction.js';
import { useDispatch } from 'react-redux';
import LottieView from 'lottie-react-native';
import { resetCart } from '../Redux/Actions/cartaction.js';
import TextInputNormal from '../Components/TextInputNormal.js';
import { TextInput, Alert, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import TextInputIcon from '../Components/Inputs/TextInputIcon.js';
import client from '../api/client.js';



const CheckoutScreen = ({ navigation, route }) => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [couponCode, setCouponCode] = useState(false);
  const [discount, setDiscount] = useState(0);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalName, setModalName] = useState(false);
  const { loading, success } = useSelector(state => state.order)
  const [alert, setAlert] = useState({
    visible: false,
    message: ''
  })
  const [paymentMethod, setPaymentMethod] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

  const handleEditPress = (payment, address) => {
    setModal(true);
    setModalName(payment ? 'Payment' : 'Address');
  }
  const { shippingInfo } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.user);
  const { cartItems } = useSelector(state => state.cart);
  const { quantity, total } = route.params;

  const handlePlaceOrder = () => {
    if (!shippingInfo) return setAlert({ ...alert, visible: true, message: 'Please Enter Shipping Info' })
    if (!paymentMethod) return setAlert({ ...alert, visible: true, message: 'Please Select a Payment Method' })
    dispatch(placeOrder(shippingInfo, user, cartItems, discount, paymentMethod))
    dispatch(resetCart())
  }

  // handleCLose alert
  const closeAlert = () => {
    setAlert({ ...alert, visible: false, message: null })
  }

  const handleCloseModal = () => {
    dispatch({ type: 'RESET_SUCCESS' })
  }
  const handleCouponPress = () => {
    if (!couponCode) {
      Alert.alert('No Coupon', 'Please enter a coupon')
    }
    client.post('/validate-coupon', { coupon: couponCode }).then(res => {
      if (!res.ok) {
        return Alert.alert("Error", "Coupon Is Not Valid")
      }
      Alert.alert('Success', 'Coupon Applied Successfully')
      setDiscount(res.data.coupon.discount)
    })
  }
  const handlePressSec = () => {
    dispatch({ type: 'RESET_SUCCESS' })
    navigation.navigate('Orders')
  }

  const handlePaymentPress = (method) => {
    setPaymentMethod(method)
  }
  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CustomAlert message={alert.message} visible={alert.visible} onPress={closeAlert} />
        <AppHeader style={styles.header} navigation={navigation} title="Checkout" />
        <CheckoutCTA handlePress={handleEditPress} address={shippingInfo} style={styles.card} editable title='Shipping Address' />
        <CheckoutCTA style={styles.card} title='Items Order' items={{ quantity, total }} />
        <CheckoutCTA handlePress={handleEditPress} editable style={styles.card} title='Payment' payment paymentMethod={paymentMethod} />
        <View>
          <AppText style={styles.couponSection}>Have A Coupon?</AppText>
          <View style={styles.inputWrapper}>
            <TextInput style={styles.TextInput} onChangeText={setCouponCode} />
            <TouchableOpacity style={styles.couponSub} onPress={handleCouponPress}>
              <Entypo name="ticket" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>


      {!keyboardStatus && <View style={styles.bottom}>
        <View style={styles.price}>
          <AppText style={styles.text}>Subtotal</AppText>
          <AppText style={styles.price} font='Montserrat_700Bold'>{`$${total}`}</AppText>
        </View>
        {discount ? (<>
          <View style={styles.price}>
            <AppText style={styles.text}>Coupon</AppText>
            <AppText style={[styles.price]} font='Montserrat_700Bold'>{`-$${discount}`}</AppText>
          </View>
          <View style={styles.price}>
            <AppText style={styles.text}>After Discount</AppText>
            <AppText style={styles.price} font='Montserrat_700Bold'>{`$${total - discount}`}</AppText>
          </View>
        </>) : null}
        <AppButton Icon={<WalletIcon />} title='Place Order' handlePress={handlePlaceOrder} loading={loading} />
        {success && (<CustomAlert
          secBtnTitle='Go to Orders'
          onPressSec={handlePressSec}
          onPress={handleCloseModal}
          message='Order Placed Successfully'
          Animation={
            <LottieView
              autoPlay
              loop={false}
              source={require('../../assets/payment-done.json')}
            />
          } />)}
      </View>}
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
          {modalName === 'Payment' && <PaymentForm setModal={setModal} handlePress={handlePaymentPress} />}
        </View>
      </Modal>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Globalstyle.paddingLarge,
  },
  inputWrapper: {
    borderRadius: 16,
    overflow: 'hidden'

  },
  couponSub: {
    backgroundColor: Appcolor.primary,
    width: 80,
    height: "100%",
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,

  },
  couponSection: {
    marginVertical: 10,
  },
  TextInput: {
    paddingHorizontal: 10,
    backgroundColor: "#E2E3E9", height: 60, borderRadius: 16,
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
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 14,
    color: Appcolor.yellow,
  },
  text: {
    fontSize: 14,
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