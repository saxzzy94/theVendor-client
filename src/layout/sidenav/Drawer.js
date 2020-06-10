import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Drawer = ({ sidenav, closeNav }) => {
	const [sidenavClass, setSidenavClass] = useState(sidenav);

	const changeClass = e => {
		e.preventDefault();
		setSidenavClass("sidenav close");
		closeNav();
	};
	return (
		<div id='mySidenav' class={sidenavClass}>
			<input to='#' className='closebtn' onClick={changeClass} />
			<Link to='#'>About</Link>
			<Link to='#'>Services</Link>
			<Link to='#'>Clients</Link>
			<Link to='#'>Contact</Link>
		</div>
	);
};
