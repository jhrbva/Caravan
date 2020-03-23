/*global google*/
import React from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} from 'react-google-maps';
import apikey from './apikey'

const Map = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${apikey}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh`, width: `1000px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
        componentDidMount() {
            const DirectionsService = new google.maps.DirectionsService();

            DirectionsService.route(
                {
                    origin: new google.maps.LatLng(41.85073, -87.65126),
                    destination: new google.maps.LatLng(41.85258, -87.65141),
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
)(props => (
    <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(41.85073, -87.65126)}
    >
        {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
));

export default Map;
