import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authenticationReducer, userReducer } from "./Reducers/userreducer.js";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { productReducer } from "./Reducers/productreducer.js";
import { cartReducer } from "./Reducers/cartreducer.js";
import { useState } from "react";
import { getData } from "../Store/StoreData.js";
import { orderReducer } from "./Reducers/orderreducer.js";

const middlewares = [thunk, logger];

const reducer = combineReducers({
  user: authenticationReducer,
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
})


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));


export default store;