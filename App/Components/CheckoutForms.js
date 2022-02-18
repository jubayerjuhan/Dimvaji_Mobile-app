import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import * as Yup from 'yup';

import Appcolor from '../Appcolor.js';
import TextInputIcon from './Inputs/TextInputIcon.js';
import AppButton from './AppButton.js';
import Globalstyle from '../Globalstyle.js';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addShippingAddress } from '../Redux/Actions/cartaction.js';


const shippingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.number('Enter Numbers Only').required('Phone is required'),
  street: Yup.string().required('Street is required'),
  area: Yup.string().required('Area is required'),
});
const CheckoutForms = ({ setModal }) => {
  const dispatch = useDispatch()
  const handleShippingSubmit = (value) => {
    dispatch(addShippingAddress(value))
    setModal(false)
  }
  return (
    <Formik
      validationSchema={shippingSchema}
      initialValues={{}}
      onSubmit={(values) => handleShippingSubmit(values)}
    >
      {({ handleChange, errors, handleSubmit }) => (
        <View style={styles.container}>
          <FontAwesome onPress={() => setModal(false)} style={styles.times} name="times" size={30} color={Appcolor.primary} />
          <TextInputIcon
            style={styles.input}
            Icon={<Ionicons name="ios-people-circle-outline" size={30} color={Appcolor.primary} />}
            placeholder={'Name'}
            name={'name'}
            onChangeText={handleChange('name')}
            error={errors.name}
          />
          <TextInputIcon
            name={'phone'}
            style={styles.input}
            icon='phone-portrait-outline'
            placeholder={'Phone No'}
            onChangeText={handleChange('phone')}
            error={errors.phone}
          />
          <TextInputIcon
            name={'street'}
            style={styles.input}
            Icon={<MaterialCommunityIcons name="road-variant" size={30} color={Appcolor.primary} />}
            placeholder={'Street'}
            onChangeText={handleChange('street')}
            error={errors.street}
          />
          <TextInputIcon
            name={'area'}
            style={styles.input}
            icon='ios-pin'
            placeholder={'Area'}
            onChangeText={handleChange('area')}
            error={errors.area}
          />
          <AppButton style={styles.btn} title='Submit' handlePress={handleSubmit} Icon={<AntDesign name="save" size={30} color={Appcolor.white} />} />
        </View>

      )
      }
    </Formik >
  );
}

const styles = StyleSheet.create({
  container: {
  },
  times: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  btn: {
    marginVertical: Globalstyle.paddingLarge,
  }
});

export default CheckoutForms;