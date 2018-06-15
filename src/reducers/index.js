import { combineReducers } from "redux";
import CounterReducer from "./counter";
import ShoppingKartReducer from "./shoppingKart";

// combine all reducers
const allReducers = combineReducers({
	counter: CounterReducer,
	shoppingKart: ShoppingKartReducer
});

export default allReducers;
