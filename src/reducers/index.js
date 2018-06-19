import { combineReducers } from "redux";
import CounterReducer from "./counter";
import ShoppingKartReducer from "./shoppingKart";
import Calculator from "./calculator";

// combine all reducers
const allReducers = combineReducers({
	counter: CounterReducer,
	shoppingKart: ShoppingKartReducer,
	calculator: Calculator
});

export default allReducers;
