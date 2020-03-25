import React from 'react';
import './BigButton.scss';

function BigButton({ value, onClick, type, disabled }) {
	return (
		<button
			className='big-button'
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{value}
		</button>
	);
}

export default BigButton;
