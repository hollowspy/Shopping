const initialState = "";

const calculator = (state = initialState, action) => {
	switch (action.type) {
		case "OPERATION":
			return state.concat([action.payload]);
		case "RESULT":
			return eval(state).toString();
		case "REVERSE_SIGN":
			return state.charAt(0) === "-"
				? state.substring(1)
				: "-".concat([state]);
		case "CLEAR":
			return initialState;
		case "SELECT_NUMBER":
			return state.concat([action.payload]);
		default:
			return state;
	}
};

export default calculator;
