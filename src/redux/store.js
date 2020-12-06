import { createStore } from "redux";
import cakeReducer from "../redux/cakes/cakeReducer";

const store = createStore(cakeReducer);


export default store;
