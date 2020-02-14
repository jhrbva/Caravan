import React from "react";
import "./Input.scss";

function Input({
	type,
	name,
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
		<div class='input-wrapper'>
			<i className='material-icons'>{icon}</i>
			<input
				className={`login-input ${errorExists && "error"}`}
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				autofocus={autofocus}
				required
				{...field}
				{...props}
			/>
			{errorExists && <div className='error'>{form.errors[field.name]}</div>}
		</div>
	);
}

export default Input;
