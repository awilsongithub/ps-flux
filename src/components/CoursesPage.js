import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
	state = {
		courses: [],
	};

	componentDidMount() {
		getCourses().then((courses) => this.setState({ courses: courses }));
	}

	renderCourseRow(c) {
		return (
			<tr key={c.id}>
				<td>{c.title}</td>
				<td>{c.authorId}</td>
				<td>{c.category}</td>
			</tr>
		);
	}

	render() {
		return (
			<>
				<h2>Courses</h2>
				<table className='table'>
					<thead>
						<tr>
							<th>Title</th>
							<th>Author ID</th>
							<th>Category</th>
						</tr>
					</thead>
					<tbody>
						{this.state.courses.map(this.renderCourseRow)}
					</tbody>
				</table>
			</>
		);
	}
}

export default CoursesPage;
