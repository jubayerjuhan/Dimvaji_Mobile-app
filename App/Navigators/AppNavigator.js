import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../Screens/Homescreen.js';
import Cartscreen from '../Screens/Cartscreen.js';
import CheckoutScreen from '../Screens/CheckoutScreen.js';
import ProductDetailScreen from '../Screens/ProductDetailScreen.js';
import SearchScreen from '../Screens/SearchScreen.js';
import ProductColumn from '../Screens/ProductColumn.js';
import OrderScreen from '../Screens/OrderScreen.js';
import KitchenColumn from '../Screens/KitchenColumn.js';
import AllKitchen from '../Screens/AllKitchen.js';
import AuthNavigator from './AuthNavigator.js';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user } = useSelector(state => state.user);
  console.log(user, 'myUser')
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }}
    >
      <Stack.Screen name='Home' component={Homescreen} />
      <Stack.Screen name='Cart' component={Cartscreen} />
      <Stack.Screen name='Product' component={ProductDetailScreen} />
      <Stack.Screen name='Search' component={SearchScreen} />
      <Stack.Screen name='Orders' component={OrderScreen} />
      <Stack.Screen name='Product Column' component={ProductColumn} />
      <Stack.Screen name='Kitchen Column' component={KitchenColumn} />
      <Stack.Screen name='All Kitchen' component={AllKitchen} />
      <Stack.Screen name='Checkout' component={user ? CheckoutScreen : AuthNavigator} />
    </Stack.Navigator>
  )
}

export default AppNavigator;