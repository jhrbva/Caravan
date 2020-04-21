import React from "react";

import "./Input.scss";
import TextField from "@material-ui/core/TextField";

function Input({
	type,
	name,
	tag,
	placeholder,
	className,
	maxLength,
	autofocus,
	icon,
	field,
	form,
	...props
}) {
	const errorExists =
		form && field && form.errors[field.name] && form.touched[field.name];
	return (
		<div className='input-wrapper'>
			<p className='field-header'>{tag}</p>
			<i className='material-icons'>{icon}</i>
			<input
				className='input-outlined'
				label='Required'
				type={type}
				name={name}
				isInvalid={form && !!form.errors[field.name]}
				placeholder={placeholder}
				maxLength={maxLength}
				autoFocus={autofocus}
				required
				{...field}
				{...props}
			/>

			{errorExists && <p className='error-text'>{form.errors[field.name]}</p>}
		</div>
	);
}

export default Input;
