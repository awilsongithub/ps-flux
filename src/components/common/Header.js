import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	const activeStyle = { color: "orange" };

	return (
		<nav className='mb-3'>
			<NavLink to='/' exact activeStyle={activeStyle}>
				Home
			</NavLink>
			{" | "}
			<NavLink to='/about' activeStyle={activeStyle}>
				About
			</NavLink>
			{" | "}
			<NavLink to='/courses' activeStyle={activeStyle}>
				Courses
			</NavLink>
		</nav>
	);
}

export default Header;
