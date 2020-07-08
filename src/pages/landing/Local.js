import React from "react";
import { LandingComp } from "../../components/localNews/Landing/landing";
import { GlobalProvider } from "../../Context/localNews/landing/LandingGlobalState";

export default function Local() {
	return (
		<GlobalProvider>
			<div className='col'>
				<LandingComp />
			</div>
		</GlobalProvider>
	);
}
