import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Reduceritems from "../Reduxitems/Reducer";
import Reducerdatayolo from "../Reduxyolodata/Reducer";

//for multi reducers
const rootReducer = combineReducers({
  items: Reduceritems,
  datayolo: Reducerdatayolo,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
