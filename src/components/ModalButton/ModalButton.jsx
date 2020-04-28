import React from 'react';
import './ModalButton.scss';

function ModalButton({ value, onClick, numberofbuttons = 'two' }) {
	return (
		<button
			className={['modal-button', numberofbuttons].join(' ')}
			onClick={onClick}
		>
			{value}
		</button>
	);
}

export default ModalButton;
