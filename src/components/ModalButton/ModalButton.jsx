import React from 'react';
import './ModalButton.scss';

function ModalButton({ value, onClick, color, numberofbuttons }) {
	return (
		<button
			className={['modal-button', color, numberofbuttons].join(' ')}
			onClick={onClick}
		>
			{value}
		</button>
	);
}

export default ModalButton;
