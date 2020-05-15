import React from 'react';

function TextArea({
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
			<textarea
				className='input-outlined'
				rows='6'
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

export default TextArea;
