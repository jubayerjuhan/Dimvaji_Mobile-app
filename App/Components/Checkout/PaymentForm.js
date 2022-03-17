import React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import AppButton from '../AppButton.js';
import AppText from '../AppText.js';

const PaymentForm = ({ handlePress, setModal }) => {
  const [paymentMethods, setPaymentMethods] = React.useState(false);
  const methods = [
    { name: 'Cash On Delivery', id: 1 },
    { name: 'Bkash', id: 2 },
  ]

  return (
    <View>
      <FlatList
        data={methods}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setPaymentMethods(item.name)} style={styles.container}>
            <AppText font='Montserrat_600SemiBold' style={styles.item} onPress={() => {
              handlePress(item)
              setModal(false)
            }}>{item.name}</AppText>
            {paymentMethods.id === item.id && <View style={styles.selected} />}
          </TouchableOpacity>
        )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    padding: 20,
    fontSize: 18,
  },
  selected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#089816',
  },
  btn: {
    marginTop: 20,
  }
});

export default PaymentForm;