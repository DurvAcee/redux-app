// import { createStore } from "redux";                         Deprecated !!
import { legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const applyMiddleware = require("redux").applyMiddleware;
export const store = createStore(reducers, {}, applyMiddleware(thunk))
