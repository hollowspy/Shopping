import {
	ADD_ARTICLE,
	REMOVE_ARTICLE,
	CLEAR_KART
} from "../constants/ActionTypes";

const initialState = {
	kart: [],
	articleNumber: 0,
	total: 0,
	list: [
		{
			id: 0,
			prix: 10,
			nom: "A",
			stock: 1
		},
		{
			id: 1,
			prix: 20,
			nom: "B",
			stock: 2
		},
		{
			id: 2,
			prix: 30,
			nom: "C",
			stock: 3
		},
		{
			id: 3,
			prix: 40,
			nom: "D",
			stock: 4
		}
	]
};

const updateList = (list, article, action) =>
	list.map(item => {
		if (article.id === item.id) {
			if (action === "ADD_ARTICLE")
				return { ...item, stock: item.stock - 1 };
			else return { ...item, stock: item.stock + 1 };
		} else {
			return item;
		}
	});

const findArticle = (list, article) =>
	list.find(item => item.id === article.id) === undefined ? false : true;

const updateKart = (kart, article, action) => {
	// ARTICLE EXISTE IN KART ?
	if (findArticle(kart, article)) {
		if (article.qte < 2 && action === "REMOVE_ARTICLE")
			return kart.filter(item => item.id !== article.id);
		else
			return kart.map(item => {
				// UPDATE QTE
				if (article.id === item.id) {
					// ADD ARTICLE
					if (action === "ADD_ARTICLE")
						return { ...item, qte: ++item.qte };
					// REMOVE ARTICLE
					else return { ...item, qte: --item.qte };
				} else {
					return item;
				}
			});
	} else return [...kart, { ...article, qte: 1 }];
};

const ShoppingKart = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ARTICLE:
			if (!findArticle(state.kart, action.article)) {
				return {
					...state,
					kart: updateKart(state.kart, action.article),
					list: updateList(state.list, action.article, action.type),
					articleNumber: state.articleNumber + 1,
					total: state.total + action.article.prix
				};
			} else {
				return {
					...state,
					kart: updateKart(state.kart, action.article, action.type),
					list: updateList(state.list, action.article, action.type),
					articleNumber: state.articleNumber + 1,
					total: state.total + action.article.prix
				};
			}

		case REMOVE_ARTICLE:
			return {
				...state,
				kart: updateKart(state.kart, action.article, action.type),
				list: updateList(state.list, action.article, action.type),
				articleNumber: state.articleNumber - 1,
				total: state.total - action.article.prix
			};
		case CLEAR_KART:
			return initialState;
		default:
			return state;
	}
};
export default ShoppingKart;
