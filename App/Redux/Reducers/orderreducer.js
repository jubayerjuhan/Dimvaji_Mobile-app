export const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ORDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
      }
    case 'ORDER_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    case 'RESET_SUCCESS':
      return {
        ...state,
        success: null,
      }
    default:
      return state;
  }
}


export const userOrdersReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_ORDER_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'USER_ORDER_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        orders: action.payload,
      }
    case 'USER_ORDER_FAILED':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      }
    case 'RESET_SUCCESS':
      return {
        ...state,
        success: null,
      }
    default:
      return state;
  }
}