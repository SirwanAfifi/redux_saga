import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  counter: () => null,
});

export const store = createStore(reducer, composeWithDevTools());
