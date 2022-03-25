import { NONE } from 'apisauce';
import React from 'react';
import { View, StyleSheet, Modal, Text, TouchableHighlight, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-web';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const CustomAlert = ({ visible, onPress, message, onPressSec, Animation, secBtnTitle = "Cart" }) => {
  return (
    <Modal
      transparent={true}
      animationType={'slide'}
      visible={visible}
      style={styles.modal}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          {Animation && (
            <View style={styles.animation}>
              {Animation}
            </View>
          )}

          <AppText style={styles.text}>{message}</AppText>
          <View style={styles.btnWrapper}>
            {onPressSec &&
              <TouchableNativeFeedback onPress={onPressSec}>
                <AppText style={styles.btn}>{secBtnTitle}</AppText>
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
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  animation: {
    height: 70,
  },

  modal: {
    width: 300,
  },
  container: {
    minWidth: 300,
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
    minWidth: 300,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    fontFamily: 'Montserrat_700Bold',
    borderTopColor: '#eee',
    fontSize: 16,
    textAlign: 'center',
    borderTopColor: '#eee',
    borderTopWidth: 1,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: Globalstyle.paddingMedium,
  }


});

export default CustomAlert;