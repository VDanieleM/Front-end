import { createStore } from "redux";
import storeReducer from "../reducers/storeReducer";

const initialState = [];

export const store = createStore(storeReducer, initialState);

export default store;
