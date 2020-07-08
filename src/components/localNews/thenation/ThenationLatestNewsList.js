import React, { useEffect, useContext } from "react";
import { GlobalContext } from "../../../Context/localNews/thenation/ThenationGlobalState";

export const ThenationLatestNewsList = () => {
	const { latestNews, getLatestNews } = useContext(GlobalContext);

	useEffect(() => {
		getLatestNews();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<div className='card-header'>LATEST THENATION NEWS</div>
			<ul className='list-group'>
				{latestNews.map(news => (
					<div className='card'>
						<a className='card-link' href={news.latestNewsLink}>
							<div className='card-body'>
								<div style={{ display: "flex" }}>
									<div className='card-text'>{news.latestNewsTime}</div>
									<div className='card-text'>{news.latestNewsDate}</div>
								</div>
								<h5 className='card-title'>{news.latestNewsTitle}</h5>
								<p className='card-text'>{news.latestNewsDesc}</p>
							</div>
						</a>
					</div>
				))}
			</ul>
		</>
	);
};
