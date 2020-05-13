import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Row, Col } from 'react-bootstrap';
import './Map.scss';

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
			this.setState({
				currentInstructionMessage:
					steps.instruction[this.state.currentInstruction][2],
				currentInstruction: this.state.currentInstruction + 1,
			});
			setTimeout(() => this.getNextStep(steps), 5000);
		}
	};

	componentDidMount = () => {
		this.getNextStep(this.props);
	};

	render() {
		return (
			<Row style={{ backgroundColor: '#056638', color: 'white' }}>
				<Col md={2}>
					<ArrowRightAltIcon style={{ fontSize: 80 }} />
				</Col>
				<Col md={8}>
					<h1 className='align-middle'>
						<div
							dangerouslySetInnerHTML={{
								__html: this.state.currentInstructionMessage,
							}}
						/>
					</h1>
				</Col>
			</Row>
		);
	}
}
