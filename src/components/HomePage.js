import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className='jumbotron'>
			<h1>Pluralsight React with Flux Home Page</h1>
			<p>some text about stuff </p>
			<Link to='about' className='btn btn-primary'>
				About
			</Link>
		</div>
	);
}

export default HomePage; // default if only 1 export.
