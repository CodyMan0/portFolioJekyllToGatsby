import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
	return (
		<nav>
			<h1>nav</h1>
			<div>
				<Link to="/">home</Link>
			</div>
		</nav>
	);
};

export default Navbar;
