import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CourseList(props) {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Title</th>
					<th>Author ID</th>
					<th>
						Category{" "}
						<button className='btn btn-sm btn-light'>
							<small>sort</small>
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				{props.courses.map((c) => (
					<tr key={c.id}>
						<td>
							<Link to={"/course/" + c.slug}>{c.title}</Link>
						</td>
						<td>{c.authorId}</td>
						<td>{c.category}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
CourseList.propTypes = {
	courses: PropTypes.array.isRequired,
};

CourseList.defaultProps = {
	courses: [],
};

export default CourseList;
