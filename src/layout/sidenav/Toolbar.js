import React from "react";
import { Link } from "react-router-dom";

export const Toolbar = () => {
	return (
		<div className='col-12 col-md-2'>
			<nav className='navbar navbar-expand-lg navbar-dark bg-inherit'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item active'>
							<Link className='nav-link' to='#'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#'>
								Link
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								to='#'
								className='navbar-toggler-dropdown'
								type='button'
								data-toggle='collapse'
								data-target='#navbarToggleExternalContent'
								aria-controls='navbarToggleExternalContent'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								Dropdown
							</Link>
							<div
								className='collapse'
								id='navbarToggleExternalContent'
								aria-labelledby='Toggle navigation'
							>
								<Link className='dropdown-item' to='#'>
									Action
								</Link>
								<Link className='dropdown-item' to='#'>
									Another action
								</Link>
								<div className='dropdown-divider'></div>
								<Link className='dropdown-item' to='#'>
									Something else here
								</Link>
							</div>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link disabled'
								to='#'
								tabIndex='-1'
								aria-disabled='true'
							>
								Disabled
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='#'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#'>
								Link
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								to='#'
								className='navbar-toggler-dropdown'
								type='button'
								data-toggle='collapse'
								data-target='#navbarToggleExternalContent'
								aria-controls='navbarToggleExternalContent'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								Dropdown
							</Link>
							<div
								className='collapse'
								id='navbarToggleExternalContent'
								aria-labelledby='Toggle navigation'
							>
								<Link className='dropdown-item' to='#'>
									Action
								</Link>
								<Link className='dropdown-item' to='#'>
									Another action
								</Link>
								<div className='dropdown-divider'></div>
								<Link className='dropdown-item' to='#'>
									Something else here
								</Link>
							</div>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link disabled'
								to='#'
								tabIndex='-1'
								aria-disabled='true'
							>
								Disabled
							</Link>
						</li>
						<li className='nav-item active'>
							<Link className='nav-link' to='#'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='#'>
								Link
							</Link>
						</li>
						<li className='nav-item dropdown'>
							<Link
								to='#'
								className='navbar-toggler-dropdown'
								type='button'
								data-toggle='collapse'
								data-target='#navbarToggleExternalContent'
								aria-controls='navbarToggleExternalContent'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								Dropdown
							</Link>
							<div
								className='collapse'
								id='navbarToggleExternalContent'
								aria-labelledby='Toggle navigation'
							>
								<Link className='dropdown-item' to='#'>
									Action
								</Link>
								<Link className='dropdown-item' to='#'>
									Another action
								</Link>
								<div className='dropdown-divider'></div>
								<Link className='dropdown-item' to='#'>
									Something else here
								</Link>
							</div>
						</li>
						<li className='nav-item'>
							<Link
								className='nav-link disabled'
								to='#'
								tabIndex='-1'
								aria-disabled='true'
							>
								Disabled
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
