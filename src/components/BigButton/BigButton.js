import React from 'react';
import './BigButton.scss';

function BigButton({ value, onClick }) {
	return (
		<button className="big-button" type="Submit" onClick={onClick}>
			{value}
		</button>
	);
}

export default BigButton;
