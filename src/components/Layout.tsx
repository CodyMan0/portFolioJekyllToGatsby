import React from "react";
import Navbar from "./Navbar";

type Props = {
	children: JSX.Element;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			<div>{children}</div>
			<footer>footer</footer>
		</>
	);
};

export default Layout;
