import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer, userReducer } from "./Reducers/userreducer.js";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productReducer, searchReducer } from "./Reducers/productreducer.js";
import { cartReducer } from "./Reducers/cartreducer.js";
import { useState } from "react";
import { getData } from "../Store/StoreData.js";
import { orderReducer, userOrdersReducer } from "./Reducers/orderreducer.js";
import { kitchenReducer } from "./Reducers/kitchenReducer.js";

const middlewares = [thunk, logger];

const reducer = combineReducers({
  user: authenticationReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
  search: searchReducer,
  myOrder: userOrdersReducer,
  kitchens: kitchenReducer
})


const initialState = {
  cart: {
    cartItems: [],
  }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));


export default store;