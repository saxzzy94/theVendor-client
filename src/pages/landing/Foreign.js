import React from "react";
import { LandingComp } from "../../components/foreignNews/Landing/landing";
import { GlobalProvider } from "../../Context/foreignNews/landing/LandingGlobalState";

export default function Foreign() {
	return (
		<GlobalProvider>
			<div className='col'>
				<LandingComp />
			</div>
		</GlobalProvider>
	);
}
