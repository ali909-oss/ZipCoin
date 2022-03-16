import { combineReducers } from "redux";

import shoppingReducer from "./Shopping/Shoppingreducers";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;