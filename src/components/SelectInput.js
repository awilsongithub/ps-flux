import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
	let wrapperClass = "form-group";
	if (props.error.length > 0) {
		wrapperClass += " has-error";
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={props.id}>{props.label}</label>
			<div className='field'>
				<select
					id={props.id}
					name={props.name}
					value={props.value || ""}
					onChange={props.onChange}
					className='form-control'
				>
					<option value='' key='-1'>
						-
					</option>
					{props.options.map((o) => (
						<option value={o.id} key={o.id}>
							{o.name}
						</option>
					))}
				</select>
			</div>
			{props.error && (
				<div className='alert alert-danger'>{props.error}</div>
			)}
		</div>
	);
}

SelectInput.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	value: PropTypes.string,
	error: PropTypes.string,
};

SelectInput.defaultProps = {
	error: "",
};

export default SelectInput;
