import React from "react";
import { LandingComp } from "../../components/Landing/landing";
import { GlobalProvider } from "../../Context/landing/LandingGlobalState";

export default function Landing() {
	return (
		<GlobalProvider>
			<div className='container'>
				<div className='row flex-md-nowrap'>
					<div className='col'>
						<LandingComp />
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
}
