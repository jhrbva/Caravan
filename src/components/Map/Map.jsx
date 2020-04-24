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
import { geolocated } from 'react-geolocated';

const Map = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100vh`, width: `1000px` }} />,
		mapElement: <div style={{ height: `100%` }} />,
		iconLabel: 'TC',
		iconColor: '#3d6cb9',
	}),
	withScriptjs,
	withGoogleMap,
	geolocated(),
	lifecycle({
		componentDidMount() {
			const DirectionsService = new google.maps.DirectionsService();
			DirectionsService.route(
				{
					origin: new google.maps.LatLng(40.604279, -74.400543),
					destination: new google.maps.LatLng(41.85258, -87.65141),
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
					console.log(result.routes[0].legs[0].steps[0].start_location.lat());
					if (status === google.maps.DirectionsStatus.OK) {
						this.setState({
							directions: result,
						});
					} else {
						console.error(`error fetching directions ${result}`);
					}
				}
			);
		},
	})
)((props) => {
	return (
		<>
			{props.coords && (
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
			)}
		</>
	);
});

export default Map;
