import * as SecureStore from 'expo-secure-store';

export const storeData = async (key, value) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  } catch (err) {
    console.log(err)
  }
}

export const getData = async (key) => {
  console.log(key)
  try {
    const value = await SecureStore.getItemAsync(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (err) {
    console.log(err)
  }
}


export const fetchCartData = () => async (dispatch) => {
  try {
    await SecureStore.getItemAsync('cart').then((value) => {
      dispatch({ type: 'FETCH_CART_ITEMS', payload: JSON.parse(value) })
    });
    await SecureStore.getItemAsync('user').then((value) => {
      dispatch({ type: 'FETCH_USER', payload: JSON.parse(value) })
    })

  } catch (err) {
    console.log(err)
  }
}



