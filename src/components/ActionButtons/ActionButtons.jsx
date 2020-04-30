import React from 'react';
import axios from 'axios';

import './ActionButtons.scss';
import { Link } from 'react-router-dom';
import ModalButton from '../ModalButton/ModalButton';
import { withRouter } from 'react-router';

class ActionButtons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			accepted: this.props.accepted,
		};
	}

	responseToInvitation = () => {
		axios
			.post('/invitations/accept', {
				userid: this.props.userid,
				tripid: this.props.tripid,
				accepted: this.state.accepted,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	requestChangeButton = () => {
		const { history } = this.props;
		return history.push({
			pathname: '/requestchange',
			tripid: this.props.tripid,
		});
	};

	renderInitial = () => {
		return (
			<div>
				<ModalButton
					value={'Accept'}
					onClick={() => {
						this.setState({ accepted: true }, function () {
							this.responseToInvitation();
						});
					}}
					numberofbuttons={'three'}
				/>
				<ModalButton
					value={'Reject'}
					onClick={() => {
						this.setState({ accepted: false }, function () {
							this.responseToInvitation();
						});
					}}
					numberofbuttons={'three'}
				/>
				<ModalButton
					value={'Request Change'}
					onClick={() => {
						this.requestChangeButton();
					}}
					numberofbuttons={'three'}
				/>
			</div>
		);
	};

	renderAccepted = () => {
		return (
			<div>
				<Link to='/map'>
					<ModalButton value={'Start Trip'} additionalClass={'start'} />
				</Link>
				<ModalButton
					value={'Leave Trip'}
					onClick={() => {
						this.setState({ accepted: false }, function () {
							this.responseToInvitation();
						});
					}}
					additionalClass={'leave'}
				/>
			</div>
		);
	};

	renderRejected = () => {
		return (
			<div>
				<ModalButton
					value={'Accept Invitation'}
					onClick={() => {
						this.setState({ accepted: true }, function () {
							this.responseToInvitation();
						});
					}}
				/>
				<ModalButton
					value={'Request a Change'}
					onClick={() => {
						this.requestChangeButton();
					}}
				/>
			</div>
		);
	};

	render() {
		if (this.state.accepted === true) {
			return this.renderAccepted();
		} else if (this.state.accepted === false) {
			return this.renderRejected();
		} else return this.renderInitial();
	}
}
export default withRouter(ActionButtons);
