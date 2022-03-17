export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case 'FETCH_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
}

