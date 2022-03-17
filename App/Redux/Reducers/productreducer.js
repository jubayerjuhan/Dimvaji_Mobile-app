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
        error: action.payload,
      }
    default:
      return state
  }
}
export const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SEARCH_PRODUCT_PENDING':
      return {
        ...state,
        loading: true,
      }
    case 'SEARCH_PRODUCT_FULFILLED':
      return {
        ...state,
        loading: false,
        products: action.payload,
      }
    case 'SEARCH_PRODUCT_REJECTED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}