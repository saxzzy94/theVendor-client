import React from "react";
import { ThenationCurrentNews } from "../../components/localNews/thenation/ThenationCurrentNews";
import { ThenationLatestNewsList } from "../../components/localNews/thenation/ThenationLatestNewsList";

import { GlobalProvider } from "../../Context/localNews/thenation/ThenationGlobalState";

export default function Thenation() {
	return (
		<GlobalProvider>
			<div className='container'>
				<div className='row flex-md-nowrap'>
					<div className='col-lg-8'>
						<ThenationCurrentNews />
					</div>
					<div className='col-lg-4'>
						<ThenationLatestNewsList />
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
}
