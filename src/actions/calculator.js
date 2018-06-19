import {
	REVERSE_SIGN,
	CLEAR,
	SELECT_NUMBER,
	RESULT,
	OPERATION
} from "../constants/ActionTypes";

export const operation = operator => ({
	type: OPERATION,
	payload: operator
});

export const result = () => ({
	type: RESULT,
	payload: ""
});
export const selectNumber = number => ({
	type: SELECT_NUMBER,
	payload: number
});

export const reverseSign = () => ({
	type: REVERSE_SIGN,
	payload: ""
});

export const clear = () => ({
	type: CLEAR
});
