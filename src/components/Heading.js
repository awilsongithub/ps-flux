import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Heading(props) {
	return (
		<h2 className='d-flex justify-content-between mb-4'>
			{props.title}
			{props.linkText && props.linkTo && (
				<Link className='btn btn-primary ml-3' to={props.linkTo}>
					{props.linkText}
				</Link>
			)}
		</h2>
	);
}

export default Heading;

Heading.propTypes = {
	title: PropTypes.string.isRequired,
	linkText: PropTypes.string,
	linkTo: PropTypes.string,
};
