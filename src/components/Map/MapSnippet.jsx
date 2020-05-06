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

const MapSnippet = compose(
	withProps({
		googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: `100%`, width: `100%` }} />,
		mapElement: <div style={{ height: `100%`, borderadius: `50px` }} />,
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
					waypoints: [
						{
							location: new google.maps.LatLng(42.496403, -124.413128),
							stopover: true,
						},
					],
					travelMode: google.maps.TravelMode.DRIVING,
				},
				(result, status) => {
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
		<GoogleMap
			defaultZoom={2}
			defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
		>
			{props.directions && <DirectionsRenderer directions={props.directions} />}
			{props.coords && (
				<Marker
					position={{ lat: props.coords.latitude, lng: props.coords.longitude }}
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
			)}
		</GoogleMap>
	);
});

export default MapSnippet;
