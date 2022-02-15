export const productReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ALL_PRODUCTS_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'ALL_PRODUCTS_FULFILLED':
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case 'ALL_PRODUCTS_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}