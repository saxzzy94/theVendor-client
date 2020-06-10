import React from "react";

export const Toggle = ({ handleToggle }) => {
	return (
		<>
			<button
				className='toggle-button fas fa-bars'
				onClick={handleToggle}
			></button>
		</>
	);
};
