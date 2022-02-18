import React from 'react';
import { View, StyleSheet } from 'react-native';
import Appcolor from '../Appcolor.js';
import AppButton from './AppButton.js';
import AppText from './AppText.js';
import { AntDesign } from '@expo/vector-icons';
import LottieViewer from './LottieView.js';

const ErrorRetry = ({ error, onPress }) => {
  return (
    <View style={styles.container}>
      <LottieViewer
        style={{ height: 200, width: '100%' }}
        source={require('../../assets/warning.json')}
      />

      <AppText style={styles.text} font='Montserrat_500Medium'>{error}</AppText>

      <AppButton handlePress={onPress} title='Retry' style={styles.btn} Icon={
        <AntDesign name="warning" size={24} color={Appcolor.white} />
      } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 10,
  }
});

export default ErrorRetry;