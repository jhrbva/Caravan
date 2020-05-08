/*global google*/
import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	DirectionsRenderer,
	Marker,
} from 'react-google-maps';
import { withRouter } from 'react-router';
import { geolocated } from 'react-geolocated';
import BigButton from '../BigButton/BigButton';
import { Link } from 'react-router-dom';
import InstructionalOverlay from './InstructionalOverlay';

const Map = compose(
	withRouter,
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: (
			<div
				style={{
					height: `88vh`,
					width: `100%`,
					position: `absolute`,
					top: `0`,
				}}
			/>
		),
		mapElement: <div style={{ height: `100%` }} />,
		iconLabel: 'TC',
		iconColor: '#3d6cb9',
	}),
	withScriptjs,
	withGoogleMap,
	geolocated(),
	lifecycle({
		componentDidMount() {
			if (!this.props.location.trip) {
				return 0;
			} else {
				const {
					start_lat,
					start_long,
					dest_lat,
					dest_long,
					reststops,
				} = this.props.location.trip;

				var restStopLocations = [];
				reststops.map((reststop) =>
					restStopLocations.push({
						location: reststop.location,
						stopover: true,
					})
				);
				const DirectionsService = new google.maps.DirectionsService();
				DirectionsService.route(
					{
						origin: new google.maps.LatLng(
							parseFloat(start_lat),
							parseFloat(start_long)
						),
						destination: new google.maps.LatLng(
							parseFloat(dest_lat),
							parseFloat(dest_long)
						),
						waypoints: restStopLocations,
						travelMode: google.maps.TravelMode.DRIVING,
					},
					(result, status) => {
						if (status === google.maps.DirectionsStatus.OK) {
							if (result.routes[0].legs[0].steps) {
								const stepsToDestination = result.routes[0].legs[0].steps.map(
									(coords) => {
										return [
											coords.start_location.lat(),
											coords.start_location.lng(),
											coords.instructions,
										];
									}
								);

								this.setState({
									directions: result,
									stepsToDestination: stepsToDestination,
								});
							}
						} else {
							console.error(`error fetching directions ${result}`);
						}
					}
				);
			}
		},
	})
)((props) => {
	return (
		<>
			{props.directions && <DirectionsRenderer directions={props.directions} />}
			{props.coords && (
				<>
					<GoogleMap
						defaultZoom={16}
						defaultCenter={
							new google.maps.LatLng(
								props.coords.latitude,
								props.coords.longitude
							)
						}
					>
						<Marker
							position={{
								lat: props.coords.latitude,
								lng: props.coords.longitude,
							}}
							icon={{
								path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
								fillColor: props.iconColor,
								fillOpacity: 0.8,
								scale: 8,
								strokeColor: props.iconColor,
								strokeWeight: 0.8,
								rotation: 270,
								labelOrigin: new google.maps.Point(0, -2.5),
							}}
							label={{
								text: props.iconLabel,
								color: 'white',
								fontSize: '9px',
								fontWeight: 'bold',
								fontFamily: 'Helvetica',
							}}
						/>
					</GoogleMap>
					{props.stepsToDestination && (
						<InstructionalOverlay instruction={props.stepsToDestination} />
					)}
					{!props.location.trip && (
						<>
							<b>
								<p className='no-margin'>
									Sorry, there was an error retrieving your directions.
								</p>
							</b>
							<Link to='/dashboard'>
								<BigButton value={'Back to Dashboard'} />
							</Link>
						</>
					)}
				</>
			)}
		</>
	);
});
export default Map;
