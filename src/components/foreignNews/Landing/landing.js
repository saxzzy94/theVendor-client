import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/foreignNews/landing/LandingGlobalState";
import { HomeCard } from "./HomeCard";
import { Error } from "../../utilites/Error";
import { Loader } from "../../utilites/Loader";

export const LandingComp = () => {
	const { home, getHome } = useContext(GlobalContext);
	const { loading, error } = useContext(GlobalContext);

	useEffect(() => {
		getHome();
		//eslint-disable-next-line
	}, []);

	function refreshPage() {
		window.location.reload(false);
	}

	if (error) {
		return <Error refreshPage={refreshPage} />;
	}
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<section>
					{" "}
					{home.map(news => (
						<HomeCard key={news.getTime} news={news} />
					))}
				</section>
			)}
		</>
	);
};
