export default (state, action) => {
	switch (action.type) {
		case "GET_HOME":
			return {
				...state,
				home: action.payload,
			};
		case "GET_ERROR":
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
