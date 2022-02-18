import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const LottieViewer = ({ source, style }) => {
  return (
    <View style={styles.wrapper}>
      <LottieView
        autoPlay
        loop
        source={source}
        style={[style, styles.container]}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LottieViewer;