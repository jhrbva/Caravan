import React from 'react';
import { Field } from 'formik';
import TagInput from '../TagInput/TagInput';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const TripRestStops = () => (
	<>
		<Field
			icon={<LocationOnIcon />}
			type='text'
			name='rest_stops'
			tag='REST STOPS'
			autoFocus={true}
			component={TagInput}
		/>
	</>
);

export default TripRestStops;
