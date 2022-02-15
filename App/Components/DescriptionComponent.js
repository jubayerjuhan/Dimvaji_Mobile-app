import React from 'react';
import { View, StyleSheet } from 'react-native';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';

const DescriptionComponent = ({ description }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title} font='Montserrat_500Medium'>Description</AppText>
      <AppText style={styles.text} font='Montserrat_300Light'>{description}</AppText>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Globalstyle.padding5,
    paddingHorizontal: Globalstyle.paddingMedium,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
  },
  title: {
    fontSize: 20,
    color: Appcolor.primary,
    marginBottom: Globalstyle.paddingMedium
  }
});

export default DescriptionComponent;