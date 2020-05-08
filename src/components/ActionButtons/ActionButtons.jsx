import React from 'react';
import axios from 'axios';

import './ActionButtons.scss';
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
		const { rerender } = this.props;
		// if user rejects invitation or decides to leave the trip, delete from members table
		if (this.state.accepted === false) {
			axios
				.delete(`/members/${this.props.tripid}/${this.props.userid}`, {
					params: { userid: this.props.userid, tripid: this.props.tripid },
				})
				.then((response) => {
					console.log(response);
					rerender();
				})
				.catch((error) => {
					console.log(error);
				});
		}
		//otherwise, add to members table
		else {
			axios
				.post(`/members/${this.props.tripid}`, {
					tripid: this.props.tripid,
					userid: this.props.userid,
				})
				.then(function (response) {
					console.log(response);
				})
				.catch(function (error) {
					console.log(error);
				});
		}

		// in either case, update status on invitations table
		axios
			.post('/invitations/accept', {
				userid: this.props.userid,
				tripid: this.props.tripid,
				accepted: this.state.accepted,
			})
			.then(function (response) {
				console.log(response);
				rerender();
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	passProps = (path) => {
		const { history } = this.props;
		return history.push({
			pathname: `/${path}`,
			tripid: this.props.tripid,
			trip: this.props.trip,
		});
	};

	renderInitial = () => {
		// if user is the host
		if (this.props.isYourTrips) {
			return (
				<ModalButton
					value={'Start Trip'}
					onClick={() => {
						this.passProps('map');
					}}
					numberofbuttons={'one'}
				/>
			);
			// if user is a guest
		} else {
			return (
				<div>
					<ModalButton
						value={'Accept'}
						onClick={() => {
							this.setState({ accepted: true }, () => {
								this.responseToInvitation();
							});
						}}
						numberofbuttons={'three'}
					/>
					<ModalButton
						value={'Reject'}
						onClick={() => {
							this.setState({ accepted: false }, () => {
								this.responseToInvitation();
							});
						}}
						numberofbuttons={'three'}
					/>
					<ModalButton
						value={'Request Change'}
						onClick={() => {
							this.passProps('requestchange');
						}}
						numberofbuttons={'three'}
					/>
				</div>
			);
		}
	};

	renderAccepted = () => {
		return (
			<div>
				<ModalButton
					value={'Start Trip'}
					additionalClass={'start'}
					onClick={() => {
						this.passProps('map');
					}}
				/>

				<ModalButton
					value={'Leave Trip'}
					onClick={() => {
						this.setState({ accepted: false }, () => {
							this.responseToInvitation();
							this.props.rerender();
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
						this.setState({ accepted: true }, () => {
							this.responseToInvitation().then(this.props.rerender());
						});
					}}
				/>
				<ModalButton
					value={'Request a Change'}
					onClick={() => {
						this.passProps('requestchange');
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
