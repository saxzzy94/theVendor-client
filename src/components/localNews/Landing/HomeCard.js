import React from "react";
export const HomeCard = ({ news }) => {
	return (
		<>
			<div className='card'>
				<div className='card-header' style={{ margin: 0, padding: 0 }}>
					<div
						className='toast-header'
						style={{ backgroundColor: "inherit", border: "none" }}
					>
						<img
							src={news.logo}
							className='rounded mr-2'
							alt='...'
							width='50px'
							height='50px'
							style={{ backgroundColor: "#f1f1f1" }}
						/>
						<h6>
							<strong className='mr-auto' style={{ color: "#f1f1f1" }}>
								{news.newsPaper}
							</strong>
						</h6>
						<small className='' style={{ color: "#333" }}>
							<time>
								<span>{news.currentNewsTime}</span>
							</time>
						</small>
					</div>
				</div>
				<a
					className='card-link'
					href={news.currentNewsLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<figure>
						<picture>
							<img src={news.currentNewsImg} className='card-img-top' alt='' />
						</picture>
					</figure>
					<div className='card-body'>
						<h6 className='text-primary'>
							<span className='card-text'>{news.currentNewsDate}</span>
							<span className='card-text'>{news.currentNewsLocation}</span>
						</h6>
						<h5 className='card-title'>{news.currentNewsTitle}</h5>
						<p className='font-weight-light'>{news.currentNewsDesc}</p>
					</div>
				</a>
			</div>
		</>
	);
};
