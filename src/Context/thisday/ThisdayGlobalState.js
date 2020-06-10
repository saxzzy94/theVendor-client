import React, { createContext, useReducer } from "react";
import AppReducer from "./ThisdayAppReducer";
import axios from "axios";
//Initial State

const initialState = {
	currentNews: [],
	latestNews: [],
};
//Create Context
export const GlobalContext = createContext(initialState);

//provider componenet
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	async function getCurrentNews() {
		try {
			const res = await axios.get("http://localhost:5000/news/thisday");

			dispatch({
				type: "GET_CURRENT_NEWS",
				payload: res.data.currentNewsArray,
			});
		} catch (error) {
			console.log(error);
		}
	}
	async function getLatestNews() {
		try {
			const res = await axios.get("http://localhost:5000/news/thisday");

			dispatch({
				type: "GET_LATEST_NEWS",
				payload: res.data.latestNewsArray,
			});
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<GlobalContext.Provider
			value={{
				currentNews: state.currentNews,
				latestNews: state.latestNews,
				getCurrentNews,
				getLatestNews,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
