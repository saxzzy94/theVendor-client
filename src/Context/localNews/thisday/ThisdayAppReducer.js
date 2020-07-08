export default (state, action) => {
	switch (action.type) {
		case "GET_CURRENT_NEWS":
			return {
				...state,
				currentNews: action.payload,
			};
		case "GET_LATEST_NEWS":
			return {
				...state,
				latestNews: action.payload,
			};
		default:
			return state;
	}
};
