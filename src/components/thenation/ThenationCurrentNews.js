import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../Context/thenation/ThenationGlobalState";

export const ThenationCurrentNews = () => {
	const { currentNews, getCurrentNews } = useContext(GlobalContext);

	useEffect(() => {
		getCurrentNews();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<div className='card-header'>JUST IN</div>{" "}
			{currentNews.map(news => (
				<div className='card'>
					<a className='card-link' href={news.currentNewsLink}>
						<img
							src={news.currentNewsImg}
							className='card-img-top'
							alt='curr-img'
						/>
						<div className='card-body'>
							<div style={{ display: "flex" }}>
								<div className='card-text'>{news.currentNewsTime}</div>
								<div className='card-text'>{news.currentNewsDate}</div>
							</div>
							<h5 className='card-title'>{news.currentNewsTitle}</h5>
							<p className='card-text'>{news.currentNewsDesc}</p>
						</div>
					</a>
				</div>
			))}
			<hr style={{ margin: "2px", height: "10px" }} />
		</>
	);
};
