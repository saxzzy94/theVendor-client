// import React, { useState } from "react";
// import { Toolbar } from "./Toolbar";
// import { Drawer } from "./Drawer";
// import "./sidenav.css";
// export const SideNav = () => {
// 	const [openNav, setOpenNav] = useState(false);

// 	const handleChange = () => {
// 		if (!openNav) {
// 			setOpenNav(true);
// 		} else {
// 			setOpenNav(false);
// 		}
// 	};

// 	const closeHandler = () => {
// 		setOpenNav(false);
// 	};

// 	let drawer;
// 	if (openNav) {
// 		drawer = <Drawer closeNav={closeHandler} sidenav={"sidenav"} />;
// 	}
// 	return (
// 		<div>
// 			<Toolbar handleToggle={handleChange} />
// 			{drawer}
// 		</div>
// 	);
// };
