import { loginUser, registerUser } from "../Redux/Actions/useractions.js"
import { storeData } from "../Store/StoreData.js";

const authentication = (values, method) => async (dispatch) => {
  const { token, user } = await dispatch(method === 'login' ? loginUser(values) : registerUser(values));
  storeData('authToken', token);
  storeData('user', user);

  if (!token) return false;
  return true;
}

export default {
  authentication
}

