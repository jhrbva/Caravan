import React from 'react';
import './Input.scss';

function Input({ type, name, placeholder, maxLength, autofocus, icon }) {
	return (
		<div class="input-wrapper">
			<i className="material-icons">{icon}</i>
			<input
				className="login-input"
				type={type}
				name={name}
				placeholder={placeholder}
				maxLength={maxLength}
				autofocus={autofocus}
				required
			/>
		</div>
	);
}

export default Input;
