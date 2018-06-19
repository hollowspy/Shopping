import React, { Component } from "react";
import "./App.css";
import Counter from "./containers/Counter";
import ShoppingKartContainers from "./containers/ShoppingKart";
import Calculator from "./containers/Calculator";

//REDUX
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

// CREATE STORE
const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Calculator />
					<Counter />
					<ShoppingKartContainers />
				</div>
			</Provider>
		);
	}
}

export default App;
