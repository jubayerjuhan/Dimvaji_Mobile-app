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
        success: false,
      }


    default:
      return state;
  }
}