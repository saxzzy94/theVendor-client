import React from "react";

export const Error = ({ refreshPage }) => {
	return (
		<div style={{ color: "#f1f1f1", marginTop: "150px" }}>
			<div className='m-auto '>
				<h5 className='d-flex justify-content-center'>
					Oops! Something Went wrong.
				</h5>
				<p className='d-flex justify-content-center'>
					{" "}
					Please, Check your internet connection
				</p>
				<div className='d-flex justify-content-center'>
					<button
						className='btn rounded m-3'
						style={{ borderColor: "	#00BFFF" }}
						onClick={refreshPage}
					>
						Try Again
					</button>
				</div>
			</div>
		</div>
	);
};
