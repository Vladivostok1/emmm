import {createStore} from "redux";
import reducer from "./reducer";
let initState = {
    num : 0
}
let store = createStore(reducer,initState)

export default store;
