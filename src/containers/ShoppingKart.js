import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ShoppingKartActions from "../actions/shoppingKart";

import ShoppingList from "../components/ShoppingList";
import Kart from "../components/Kart";

class ShoppingKart extends Component {
	addArticle = article => {
		this.props.addArticle(article);
	};

	removeArticle = article => {
		this.props.removeArticle(article);
	};

	clearKart = () => {
		this.props.clearKart();
	};

	render() {
		return (
			<div>
				<h1>SHOPPING KART :</h1>
				<ShoppingList
					articles={this.props.shoppingKart.list}
					addArticle={this.addArticle}
				/>
				<Kart
					kart={this.props.shoppingKart.kart}
					numberTotal={this.props.shoppingKart.articleNumber}
					total={this.props.shoppingKart.total}
					removeArticle={this.removeArticle}
					clearKart={this.clearKart}
				/>
				<button onClick={() => this.props.addArticle("6", "9")}>
					TEST
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { shoppingKart: state.shoppingKart };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(ShoppingKartActions, dispatch);
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		addArticle: article => dispatch(addArticle(article))
// 	};
// };

// CONNECT STATE FROM REDUX TO COMPONENT
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShoppingKart);
