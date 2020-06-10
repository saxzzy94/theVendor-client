import React from "react";
import { VanguardCurrentNews } from "../../components/vanguard/VanguardCurrentNews";
import { VanguardLatestNewsList } from "../../components/vanguard/VanguardLatestNewsList";

import { GlobalProvider } from "../../Context/vanguard/VanguardGlobalState";

export default function Vanguard() {
	return (
		<GlobalProvider>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						<VanguardCurrentNews />
					</div>
					<div className='col-md-4'>
						<VanguardLatestNewsList />
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
}
