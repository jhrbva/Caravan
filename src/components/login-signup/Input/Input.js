import React from 'react';
import './Input.scss';

class Input extends React.Component {
	render() {
		const type = this.props.type;
		const name = this.props.name;
		const placeholder = this.props.placeholder;
		const maxLength = this.props.maxLength;
		const autofocus = this.props.autofocus;
		const icon = this.props.icon;

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
}

export default Input;
