import React, { useContext, useEffect } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import Screen from '../Components/Screen.js'
import { Formik } from 'formik';
import TextInputIcon from '../Components/Inputs/TextInputIcon.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Appcolor from '../Appcolor.js';
import * as Yup from 'yup';
import AppText from '../Components/AppText.js';
import AppButton from '../Components/AppButton.js';
import appauth from '../Authentication/appauth.js';
import AppContext from '../context/appcontext.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import CustomAlert from '../Components/CustomAlert.js';


const AuthScreen = ({ navigation: { goBack }, route }) => {
  const { login } = route.params;
  const schema = Yup.object().shape({
    name: login ? '' : Yup.string().required('Name Required'),
    email: Yup.string().required('Email Required').email('Invalid email'),
    password: Yup.string().required('Password Required').min(4, 'Password must be at least 4 characters'),
  });
  const { loggedIn, error, loading } = useSelector(state => state.user)

  // start 
  const handleFormSubmit = async (values) => {
    dispatch(appauth.authentication(values, login ? 'login' : 'signup'));
  }
  const dispatch = useDispatch()
  // handle Error
  // Here
  const visible = error ? true : false;
  const handleAlertPress = () => {
    dispatch({ type: 'CLEAR_ERROR' })
  }


  return (
    <Screen style={styles.container}>
      <CustomAlert visible={visible} message={error} onPress={handleAlertPress} />
      <AppText style={styles.title} font='Montserrat_600SemiBold'>{login ? 'Login' : 'Sign Up'}</AppText>
      <Formik
        validationSchema={schema}
        initialValues={{}}
        onSubmit={values => handleFormSubmit(values)}
      >
        {({ handleChange, handleBlur, errors, handleSubmit, values }) => (

          <View>
            {!login && (<TextInputIcon
              icon='people-outline'
              name={'name'}
              placeholder={'Email'}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name}
            />)}
            <TextInputIcon
              Icon={<MaterialCommunityIcons name="email" size={30} color={Appcolor.primary} />}
              name={'email'}
              placeholder={'Email'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
            />
            <TextInputIcon
              Icon={<MaterialCommunityIcons name="form-textbox-password" size={30} color={Appcolor.primary} />}
              name={'password'}
              placeholder={'Password'}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              secureTextEntry
            />

            <AppButton loading={loading} style={styles.btn} handlePress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  btn: {
    marginVertical: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginVertical: 50,
  }
});

export default AuthScreen;