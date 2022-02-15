import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const LottieViewer = () => {
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/boxloader.json')}
    />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default LottieViewer;