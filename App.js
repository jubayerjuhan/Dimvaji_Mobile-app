import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainNavigator from './App/Navigators/MainNavigator.js';
import { Provider, useDispatch } from 'react-redux';
import store from './App/Redux/store.js'
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat';
import { fetchCartData, getData } from './App/Store/StoreData.js';
import { useSelector } from 'react-redux';



const App = () => {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState(false);
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  });
  const Stack = createNativeStackNavigator();
  const loadUser = async () => {
    const user = await getData('user')
    setUser(user)
  }

  if (!ready) {
    return (<AppLoading
      startAsync={loadUser}
      onFinish={() => setReady(true)}
      onError={console.warn}
    />
    )
  }
  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          {!user && <Stack.Screen name="Authentication" component={AuthNavigator} />}
          <Stack.Screen name="Main" component={MainNavigator} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;