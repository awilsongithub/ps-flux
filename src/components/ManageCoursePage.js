import React, { useState, useEffect } from "react";
import * as courseApi from "../api/courseApi";
import * as courseActions from "../actions/courseActions";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
import Heading from "./Heading";
import store from "../stores/courseStore";

function ManageCoursePage(props) {
	const [errors, setErrors] = useState({});
	const [authors, setAuthors] = useState([]);
	const [course, setCourse] = useState({
		id: null,
		slug: "",
		title: "",
		authorId: null,
		category: "",
	});
	const slug = props.match.params.slug;
	const pageTitle = slug ? "Edit Course" : "Add Course";

	useEffect(() => {
		courseApi.getAuthors().then((a) => setAuthors(a));
		if (slug) {
			setCourse(store.getCourseBySlug(slug));
		}
	}, [props.match.params.slug]);

	function handleChange({ target }) {
		const updatedCourse = {
			...course,
			[target.name]: target.value,
		};
		setCourse(updatedCourse);
	}

	function formIsValid() {
		const _errors = {};
		if (!course.title) _errors.title = "Title is required";
		if (!course.authorId) _errors.authorId = "Author is required";
		if (!course.category) _errors.category = "Category is required";
		setErrors(_errors);
		return Object.keys(_errors).length === 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (!formIsValid()) return;
		courseActions.saveCourse(course).then(() => {
			toast.success("course saved");
			props.history.push("/courses");
		});
	}

	return (
		<>
			<Heading title={pageTitle} />
			<CourseForm
				course={course}
				authors={authors}
				errors={errors}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
		</>
	);
}

export default ManageCoursePage;
