import React, { Component } from "react";
import { connect } from "react-redux";

import { bindActionCreators } from "redux";
import * as CounterActions from "../actions/counter";

class Counter extends Component {
	// static propTypes = {
	// 	increment: PropTypes.func.isRequired,
	// 	decrement: PropTypes.func.isRequired,
	// 	counter: PropTypes.number.isRequired,
	// }
	// REDUX => no state in component
	// state = { count: 0 };

	// decrement = () => {
	// 	// this.setState({ count: this.state.count - 1 });
	// 	//later
	// 	this.props.dispatch({ type: "DECREMENT" });
	// };

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<div>
					<button onClick={() => this.props.increment()}>+</button>
					<button onClick={() => this.props.decrement()}>-</button>
				</div>
				<div>
					<span>{this.props.count}</span>
				</div>
			</div>
		);
	}
}
// STATE FROM REDUX BIND TO PROPS
function mapStateToProps(state) {
	return {
		count: state.counter
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(CounterActions, dispatch);
}

// CONNECT STATE FROM REDUX TO COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// WITHOUT REDUX
// export default Counter;
