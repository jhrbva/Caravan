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
	return (
		<div class='input-wrapper'>
			<i className='material-icons'>{icon}</i>
			<input
				className={`login-input ${className}`}
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				autofocus={autofocus}
				required
				{...field}
				{...props}
			/>
		</div>
	);
}

export default Input;
