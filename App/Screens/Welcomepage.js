import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../Components/AppButton.js';
import Screen from '../Components/Screen.js';
import { AntDesign } from '@expo/vector-icons';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from '../Components/AppText.js';


const Welcomepage = ({ navigation, route }) => {
  return (
    <Screen style={styles.container}>
      <AppText font='Montserrat_600SemiBold' style={styles.text}>Welcome</AppText>
      <View style={styles.buttons}>
        <AppButton handlePress={() => navigation.navigate('Auth', { login: true, back: route.name })} style={styles.btn} title='Login' Icon={<AntDesign name="login" size={24} color={Appcolor.white} />} />
        <AppButton handlePress={() => navigation.navigate('Auth', { login: false, back: route.name })} style={[styles.btn, { backgroundColor: Appcolor.tertiary }]} title='Sign Up' Icon={<AntDesign name="login" size={24} color={Appcolor.white} />} />
      </View>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Globalstyle.paddingLarge,
    justifyContent: 'space-between',
  },
  btn: {
    marginVertical: Globalstyle.padding5,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 25,
  }
});

export default Welcomepage;