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
import { fetchCartData, fetchDataFromStorage, getData } from './App/Store/StoreData.js';
import { useSelector } from 'react-redux';
import AuthNavigator from './App/Navigators/AuthNavigator.js';



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



  if (!fontsLoaded) return null;
  return (
    <Provider store={store}>
      <Ready />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const Ready = () => {
  const [ready, setReady] = useState(ready);
  const dispatch = useDispatch();

  const dispatchData = () => {
    dispatch(fetchDataFromStorage());
  }

  if (!ready) {
    return (<AppLoading
      startAsync={dispatchData}
      onFinish={() => {
        setTimeout(() => {
          setReady(true);
        }, 500);
      }}
      onError={console.warn}
    />
    )
  }
  return (
    <View>
      {/* <Text>Ready</Text> */}
    </View>
  )
}

export default App;