import React from "react";
import TextInput from "./TextInput";
import PropTypes from "prop-types";
import SelectInput from "./SelectInput";

function CourseForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<TextInput
				id='title'
				label='Title'
				name='title'
				onChange={props.onChange}
				// value is "controlled" by controller component
				// view needs to update controller on change
				value={props.course.title}
				error={props.errors.title}
			/>

			<SelectInput
				id='author'
				name='authorId'
				label='Author ID'
				onChange={props.onChange}
				value={props.course.authorId || ""}
				options={props.authors}
				error={props.errors.authorId}
			/>

			<TextInput
				id='category'
				label='Category'
				name='category'
				value={props.course.category}
				onChange={props.onChange}
				error={props.errors.category}
			/>

			<input type='submit' className='btn btn-primary' value='Save' />
		</form>
	);
}

CourseForm.propTypes = {
	course: PropTypes.object.isRequired,
	authors: PropTypes.array.isRequired,
	errors: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default CourseForm;
