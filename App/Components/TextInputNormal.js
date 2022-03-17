import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Appcolor from '../Appcolor.js';
import { getProducts } from '../Redux/Actions/productaction.js';
import { useDispatch } from 'react-redux';



const TextInputNormal = ({ Icon, name, error, style, placeholder, icon, setKeyword, ...otherIcons }) => {


  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            {Icon}
            {icon && <Ionicons name={icon} size={30} color={Appcolor.primary} />}
          </View>
          <TextInput
            onEnter
            onSubmitEditing={(event) => setKeyword(event.nativeEvent.text)}
            {...otherIcons}
            style={styles.input}
            placeholder={placeholder}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  error: {
    color: 'red',
  },
  input: {
    backgroundColor: Appcolor.whitegray,
    borderRadius: 15,
    height: '100%',
    fontSize: 18,
    paddingLeft: 60,
    fontFamily: 'Montserrat_400Regular',
  },
  icon: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default TextInputNormal;