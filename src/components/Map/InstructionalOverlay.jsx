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
		if (
			steps.instruction &&
			this.state.currentInstruction < steps.instruction.length
		) {
			this.setState({
				currentInstructionMessage:
					steps.instruction[this.state.currentInstruction][2],
				currentInstruction: this.state.currentInstruction + 1,
			});
		}
		setTimeout(() => this.getNextStep(steps), 5000);
	};

	componentDidMount = () => {
		this.getNextStep(this.props);
	};

	render() {
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
