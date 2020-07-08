import React from "react";

export const Loader = () => {
	return (
		<div style={{ color: "#f1f1f1", marginTop: "150px" }}>
			<div
				className='d-flex justify-content-center m-5'
				style={{ marginTop: "500px" }}
			>
				<div
					className='spinner-grow text-primary m-5'
					style={{ width: "3rem", height: "3rem" }}
					role='status'
				>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		</div>
	);
};
