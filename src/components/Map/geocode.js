import Geocode from 'react-geocode';
import apikey from './apikey';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(apikey);

// set response language. Defaults to english.
Geocode.setLanguage('en');

// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion('en');

// Enable or disable logs. Its optional.
Geocode.enableDebug();

export const getLatLng = async address => {
	// Get latidude & longitude from address.
	let response = await Geocode.fromAddress(address);
	return response.results[0].geometry.location;
};
