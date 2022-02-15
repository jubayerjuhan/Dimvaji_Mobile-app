export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      console.log(action.payload)

      const isItemExist = state.cartItems.find(
        (i) => i._id === item._id
      );
      console.log(isItemExist)
      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) => i._id === isItemExist._id ? item : i)
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== action.payload),
      };
    case "ADD_SHIPPING_INFO":
      return {
        ...state,
        shippingInfo: action.payload
      }

    case 'FETCH_CART_ITEMS':
      return {
        ...state,
        cartItems: action.payload
      }
    default:
      return state;
  }
}