import React from 'react';
import './BigButton.scss';

function BigButton({ value, onClick, type, disabled, color = 'blue' }) {
	return (
		<button
			className={['big-button', color].join(' ')}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{value}
		</button>
	);
}

export default BigButton;
