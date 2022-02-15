import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../Screens/Homescreen.js';
import Cartscreen from '../Screens/Cartscreen.js';
import CheckoutScreen from '../Screens/CheckoutScreen.js';
import ProductDetailScreen from '../Screens/ProductDetailScreen.js';
import SearchScreen from '../Screens/SearchScreen.js';
import ProductColumn from '../Screens/ProductColumn.js';

const Stack = createNativeStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name='Home' component={Homescreen} />
    <Stack.Screen name='Checkout' component={CheckoutScreen} />
    <Stack.Screen name='Cart' component={Cartscreen} />
    <Stack.Screen name='Product' component={ProductDetailScreen} />
    <Stack.Screen name='Search' component={SearchScreen} />
    <Stack.Screen name='Product Column' component={ProductColumn} />
  </Stack.Navigator>
)

export default AppNavigator;