import React from 'react';
import './BigButton.scss';

class BigButton extends React.Component {
	render() {
		const value = this.props.value;

		return (
			<button className="big-button" type="Submit">
				{value}
			</button>
		);
	}
}

export default BigButton;
