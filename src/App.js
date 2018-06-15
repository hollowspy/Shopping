import React, { Component } from "react";
import "./App.css";
import Counter from "./containers/Counter";
import ShoppingKartContainers from "./containers/ShoppingKart";

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
					<Counter />
					<ShoppingKartContainers />
				</div>
			</Provider>
		);
	}
}

export default App;
