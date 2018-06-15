import React, { Component } from "react";
import { connect } from "react-redux";

class ShoppingList extends Component {
	render() {
		return (
			<div>
				<h2>Articles List :</h2>
			</div>
		);
	}
}

// STATE FROM REDUX BIND TO PROPS
function mapStateToProps(state) {
	return {
		// count: state.count
	};
}

// CONNECT STATE FROM REDUX TO COMPONENT
export default connect(mapStateToProps)(ShoppingList);
