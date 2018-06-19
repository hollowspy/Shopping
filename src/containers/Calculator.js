import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CalculatorActions from "../actions/calculator";

const Calculator = props => (
	<div>
		<h1>CALCULATOR</h1>
		<p>Result : {props.calculator}</p>
		<div onClick={event => props.operation(event.target.value)}>
			<button value=" / ">/</button>
			<button value=" * ">X</button>
			<button value=" - ">-</button>
			<button value=" + ">+</button>
			<button value=" % ">%</button>
		</div>
		<button onClick={() => props.reverseSign()}>+/-</button>
		<button onClick={() => props.clear()}>AC</button>
		<button onClick={() => props.result()}>=</button>

		<br />
		<button onClick={() => props.selectNumber(0)} value={0}>
			0
		</button>
		<button onClick={() => props.selectNumber(1)} value={1}>
			1
		</button>
		<button onClick={() => props.selectNumber(2)} value={2}>
			2
		</button>
		<button onClick={() => props.selectNumber(3)} value={3}>
			3
		</button>
		<button onClick={() => props.selectNumber(4)} value={4}>
			4
		</button>
		<button onClick={() => props.selectNumber(5)} value={5}>
			5
		</button>
		<button onClick={() => props.selectNumber(6)} value={6}>
			6
		</button>
		<button onClick={() => props.selectNumber(7)} value={7}>
			7
		</button>
		<button onClick={() => props.selectNumber(8)} value={8}>
			8
		</button>
		<button onClick={() => props.selectNumber(9)} value={9}>
			9
		</button>
	</div>
);
function mapStateToProps(state) {
	return { calculator: state.calculator };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(CalculatorActions, dispatch);
}

// CONNECT STATE FROM REDUX TO COMPONENT
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Calculator);
