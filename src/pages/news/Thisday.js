import React from "react";
import { ThisdayCurrentNews } from "../../components/thisday/ThisdayCurrentNews";
import { ThisdayLatestNewsList } from "../../components/thisday/ThisdayLatestNewsList";

import { GlobalProvider } from "../../Context/thisday/ThisdayGlobalState";

export default function Thisday() {
	return (
		<GlobalProvider>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8'>
						<ThisdayCurrentNews />
						<ThisdayLatestNewsList />
					</div>
					<div className='col-md-4'></div>
				</div>
			</div>
		</GlobalProvider>
	);
}
