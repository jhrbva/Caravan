import React from 'react';
import './BigButton.scss';

function BigButton({ value }) {
	return (
		<button className="big-button" type="Submit">
			{value}
		</button>
	);
}

export default BigButton;
