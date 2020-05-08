/*global google*/
import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	DirectionsRenderer,
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
			if (!this.props.trip) {
				return 0;
			} else {
				const {
					start_lat,
					start_long,
					dest_lat,
					dest_long,
					reststops,
				} = this.props.trip;

				var restStopLocations = [];
				(reststops || []).map((reststop) =>
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
							this.setState({
								directions: result,
							});
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
			{props.coords && (
				<GoogleMap
					defaultZoom={2}
					defaultCenter={
						new google.maps.LatLng(
							props.coords.latitude,
							props.coords.longitude
						)
					}
				>
					{props.directions && (
						<DirectionsRenderer directions={props.directions} />
					)}
				</GoogleMap>
			)}
		</>
	);
});

export default MapSnippet;
