import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Row, Col } from 'react-bootstrap';

export default class InstructionalOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentInstruction: 0,
			currentInstructionMessage: '',
			timer: null,
		};
	}

	getNextStep = (steps) => {
		if (this.state.currentInstruction < steps.instruction.length) {
			this.setState(
				{
					currentInstructionMessage:
						steps.instruction[this.state.currentInstruction][2],
				},
				() => {
					this.setState({
						currentInstruction: this.state.currentInstruction + 1,
					});
				}
			);
			clearInterval(this.timer);
		}
	};

	render() {
		console.log(this.props);
		this.timer = setTimeout(() => this.getNextStep(this.props), 5000);

		return (
			<Row style={{ backgroundColor: '#3d6cb9', color: 'white' }}>
				<Col md='xs'>
					<ArrowRightAltIcon style={{ fontSize: 100 }} />
				</Col>
				<Col>
					<h4 className='align-middle'>
						{this.state.currentInstructionMessage}
					</h4>
				</Col>
			</Row>
		);
	}
}
