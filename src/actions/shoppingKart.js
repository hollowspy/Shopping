import {
	ADD_ARTICLE,
	REMOVE_ARTICLE,
	CLEAR_KART
} from "../constants/ActionTypes";

export const addArticle = article => ({
	type: ADD_ARTICLE,
	article
});

export const removeArticle = article => ({
	type: REMOVE_ARTICLE,
	article
});

export const clearKart = () => ({
	type: CLEAR_KART
});
