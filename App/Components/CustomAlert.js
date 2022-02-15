import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-web';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const CustomAlert = ({ visible, onPress, message, onPressSec }) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={visible}
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <AppText style={styles.text}>{message}</AppText>
          <View style={styles.btnWrapper}>
            {onPressSec &&
              <TouchableNativeFeedback onPress={onPressSec}>
                <AppText style={styles.btn}>Cart</AppText>
              </TouchableNativeFeedback>
            }
            <TouchableNativeFeedback onPress={onPress}>
              <AppText style={styles.btn}>OK</AppText>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </Modal>

  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: Globalstyle.paddingLarge,
    paddingBottom: 0,
    elevation: 10,
    borderRadius: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    fontFamily: 'Montserrat_700Bold',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: Globalstyle.paddingMedium,
    marginTop: Globalstyle.paddingLarge,

  }


});

export default CustomAlert;