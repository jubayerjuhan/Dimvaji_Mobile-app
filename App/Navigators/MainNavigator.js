import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDataFromStorage, fetchUser } from "../Store/StoreData.js";
import AppNavigator from "./AppNavigator.js";
import AuthNavigator from "./AuthNavigator.js";
import AppLoading from 'expo-app-loading';


const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  useEffect(() => {
    dispatch(fetchDataFromStorage());
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="App" component={AppNavigator} />
    </Stack.Navigator>
  )
}

export default MainNavigator;