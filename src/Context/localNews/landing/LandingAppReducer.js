export default (state, action) => {
	switch (action.type) {
		case "GET_HOME":
			return {
				...state,
				loading: false,
				home: action.payload,
			};
		case "GET_ERROR":
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
