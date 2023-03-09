import React from "react";
import Navbar from "./Navbar";

type Props = {
	content: JSX.Element;
};

const Layout = ({ content }: Props) => {
	return (
		<>
			<Navbar />
			<div>{content}</div>
			<footer></footer>
		</>
	);
};

export default Layout;
