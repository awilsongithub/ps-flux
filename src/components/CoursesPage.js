import React, { useEffect, useState } from "react";
import CourseList from "./CourseList";
import Heading from "./Heading";
import * as actions from "../actions/courseActions";
import store from "../stores/courseStore";

function CoursesPage() {
	const [courses, setCourses] = useState(store.getCourses());
	var sorted = false;

	useEffect(() => {
		store.addChangeListener(onChange);
		if (store.getCourses().length === 0) {
			actions.loadCourses();
		}
		return () => store.removeChangeListener(onChange);
	}, []);

	function onChange() {
		setCourses(store.getCourses());
	}

	return (
		<>
			<Heading title='Courses' linkText='Add Course' linkTo='/course' />
			<CourseList courses={courses} />
		</>
	);
}

export default CoursesPage;
