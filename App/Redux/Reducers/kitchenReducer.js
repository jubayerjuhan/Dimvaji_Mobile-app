export const kitchenReducer = (state = {}, action) => {
  switch (action.type) {
    case "KITCHEN_PENDING":
      return {
        ...state,
        loading: true,
      }
    case "KITCHEN_SUCCESS":
      return {
        ...state,
        kitchens: action.payload,
        loading: false,
      }
    case "KITCHEN_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      }

    default:
      return {
        ...state,
      }
  }

}
