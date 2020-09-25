import { createStore } from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension';
import state from "./state.js";
import reducer from "./reducer.js"

const store = createStore(reducer, state,devToolsEnhancer())
console.log("store", store)
console.log("store", store.getState())
export default store