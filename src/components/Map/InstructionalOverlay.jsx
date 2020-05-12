import React from 'react';
import InstructionalArrows from './InstructionalArrows';
import { Row, Col } from 'react-bootstrap';
import './InstructionalOverlay.scss';

export default class InstructionalOverlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentInstruction: 0,
			currentInstructionMessage: '',
			maneuver: '',
		};
	}

	getNextStep = (steps) => {
		if (this.state.currentInstruction < steps.instruction.length) {
			this.setState({
				currentInstructionMessage:
					steps.instruction[this.state.currentInstruction][2],
				maneuver: steps.instruction[this.state.currentInstruction][3],
				currentInstruction: this.state.currentInstruction + 1,
			});
			setTimeout(() => this.getNextStep(steps), 10000);
		}
	};

	componentDidMount = () => {
		const testDirections = {
			instruction: [
				[40.7, -74.0, 'turn-sharp-left', 'turn-sharp-left'],
				[40.7, -74.0, 'turn-slight-left', 'turn-slight-left'],
				[40.7, -74.0, 'uturn-left', 'uturn-left'],
				[40.7, -74.0, 'turn-left', 'turn-left'],
				[40.7, -74.0, 'roundabout-left', 'roundabout-left'],
				[40.7, -74.0, 'fork-left', 'fork-left'],
				[40.7, -74.0, 'ramp-left', 'ramp-left'],
				[40.7, -74.0, 'uturn-right', 'uturn-right'],
				[40.7, -74.0, 'turn-slight-right', 'turn-slight-right'],
				[40.7, -74.0, 'turn-right', 'turn-right'],
				[40.7, -74.0, 'roundabout-right', 'roundabout-right'],
				[40.7, -74.0, 'ramp-right', 'ramp-right'],
				[40.7, -74.0, 'fork-right', 'fork-right'],
				[40.7, -74.0, 'turn-sharp-right', 'turn-sharp-right'],
				[40.7, -74.0, 'merge', 'merge'],
				[40.7, -74.0, 'straight', 'straight'],
				[40.7, -74.0, 'ferry-train', 'ferry-train'],
				[40.7, -74.0, 'ferry', 'ferry'],
			],
		};
		this.getNextStep(testDirections);
		// this.getNextStep(this.props);
	};

	render() {
		return (
			<Row style={{ backgroundColor: '#056638', color: 'white' }}>
				<Col md={2}>
					<InstructionalArrows maneuver={this.state.maneuver} />
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
