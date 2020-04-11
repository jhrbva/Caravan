import React from 'react';
import { InputGroup, Form, FormControl } from 'react-bootstrap';

import './Input.scss';

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
		<div className='input-wrapper'>
			<InputGroup className='mb-3'>
				<InputGroup.Prepend>
					<InputGroup.Text>{icon}</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
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
				{errorExists && (
					<Form.Control.Feedback className='error-text' type='invalid'>
						{form.errors[field.name]}
					</Form.Control.Feedback>
				)}
			</InputGroup>
		</div>
	);
}

export default Input;
