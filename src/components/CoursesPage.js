import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Heading from "./Heading";
import * as actions from "../actions/courseActions";
import store from "../stores/courseStore";

function CoursesPage() {
	const [courses, setCourses] = useState([]);
	var sorted = false;

	useEffect(() => {
		setCourses(store.getCourses());
		// actions.getCourses().then((_courses) => setCourses(_courses));
	}, []);

	return (
		<>
			<Heading title='Courses' linkText='Add Course' linkTo='/course' />
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
