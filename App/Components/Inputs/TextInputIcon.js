import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Appcolor from '../../Appcolor.js';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../AppText.js';
import { useFormikContext } from 'formik';
import * as Yup from 'yup';


const TextInputIcon = ({ Icon, name, error, style, placeholder, icon, ...otherIcons }) => {
  const { touched, setFieldTouched } = useFormikContext();
  const { handleChange } = useFormikContext()

  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.wrapper}>
          <View style={styles.icon}>
            {Icon}
            {icon && <Ionicons name={icon} size={30} color={Appcolor.primary} />}
          </View>
          <TextInput
            onBlur={() => setFieldTouched(name)}
            {...otherIcons}
            style={styles.input}
            placeholder={placeholder}
          />
        </View>
      </View>
      {(error && touched[name]) && <AppText style={styles.error}>{error}</AppText>}
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

export default TextInputIcon;