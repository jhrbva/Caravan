import React from 'react';
import './ModalButton.scss';

function ModalButton({
	value,
	onClick,
	numberofbuttons = 'two',
	additionalClass,
}) {
	return (
		<button
			className={['modal-button', numberofbuttons, additionalClass].join(' ')}
			onClick={onClick}
		>
			{value}
		</button>
	);
}

export default ModalButton;
