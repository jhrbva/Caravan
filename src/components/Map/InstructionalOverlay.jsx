import React from 'react';

import InstructionalArrows from './InstructionalArrows';
import './Map.scss';

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
			setTimeout(() => this.getNextStep(steps), 5000);
		}
	};

	componentDidMount = () => {
		this.getNextStep(this.props);
	};

	render() {
		return (
			<div className='instructional-overlay'>
				<div className='arrow-wrapper'>
					<InstructionalArrows maneuver={this.state.maneuver} />
				</div>
				<div
					className='instruction-wrapper'
					dangerouslySetInnerHTML={{
						__html: this.state.currentInstructionMessage,
					}}
				/>
			</div>
		);
	}
}
