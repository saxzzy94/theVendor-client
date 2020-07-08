import React from "react";
import { PunchCurrentNews } from "../../components/localNews/punch/PunchCurrentNews";
import { PunchLatestNewsList } from "../../components/localNews/punch/PunchLatestNewsList";
import { GlobalProvider } from "../../Context/localNews/punch/PunchGlobalState";

export default function Punch() {
	return (
		<GlobalProvider>
			<div className='container'>
				<div className='row flex-md-nowrap'>
					<div className='col-md-8'>
						<PunchCurrentNews />
					</div>
					<div className='col-md-4'>
						<PunchLatestNewsList />
					</div>
				</div>
			</div>
		</GlobalProvider>
	);
}
