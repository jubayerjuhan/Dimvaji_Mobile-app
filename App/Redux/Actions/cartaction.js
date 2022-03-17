import { storeData } from "../../Store/StoreData.js";

export const addToCart = (product, quantity) => async (dispatch, getState) => {
  console.log(product)
  const cartItem = {
    _id: product._id,
    name: product.name,
    price: product.price,
    quantity: quantity,
    image: product.image || product.images[0].url,
  }

  dispatch({ type: 'ADD_TO_CART', payload: cartItem });

  storeData('cart', getState().cart.cartItems)
}


export const deleteCartItem = (product) => async (dispatch, getState) => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: product._id })

  storeData('cart', getState().cart.cartItems)
}


export const addShippingAddress = (value) => async (dispatch) => {
  dispatch({ type: 'ADD_SHIPPING_INFO', payload: value })
  await storeData('shippingInfo', value)
}


export const resetCart = () => async (dispatch) => {
  dispatch({ type: 'RESET_CART' })
  await storeData('cart', [])
}