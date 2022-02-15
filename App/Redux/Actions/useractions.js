import client from "../../api/client.js";

export const registerUser = (values) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const { data } = await client.post('/register', values);

    if (!data.success) dispatch({ type: "LOGIN_FAILED", payload: data?.message });
    if (data.success) dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    return data;
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err.response.data.error });
  }
}

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const { data } = await client.post('/login', values);

    if (!data.success) dispatch({ type: "LOGIN_FAILED", payload: data?.message });
    if (data.success) dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    return data;
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
}