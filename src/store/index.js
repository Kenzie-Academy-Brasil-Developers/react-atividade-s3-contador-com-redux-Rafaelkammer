import { createStore, combineReducers } from "redux";

import counterReducer from "./modules/counter/reducer";

const reducers = combineReducers({ result: counterReducer });

const store = createStore(reducers);

export default store;
