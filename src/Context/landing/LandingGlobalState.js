import React, { createContext, useReducer } from "react";
import AppReducer from "./LandingAppReducer";
import axios from "axios";
//Initial State

const initialState = {
	home: [],
};
//Create Context
export const GlobalContext = createContext(initialState);

//provider componenet
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	async function getHome() {
		try {
			const res = await axios.get("http://localhost:5000/");

			dispatch({
				type: "GET_HOME",
				payload: res.data.sortedArr,
			});
		} catch (error) {
			dispatch({
				type: "GET_ERROR",
				payload: error,
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				home: state.home,
				getHome,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
