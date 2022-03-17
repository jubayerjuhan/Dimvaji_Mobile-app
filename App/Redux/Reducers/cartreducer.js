export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: state.cartItems ? [...state.cartItems, action.payload] : [action.payload]
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems?.filter((i) => i._id !== action.payload),
      };

    case "RESET_CART":
      return {
        ...state,
        cartItems: []
      }
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