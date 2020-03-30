import React from 'react';
import { Field } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';

const TripRestStops = () => (
	<>
		<Field
			icon='location_on'
			type='text'
			name='rest_stops'
			placeholder='Rest Stop'
			autoFocus={true}
			component={Input}
		/>
	</>
);

export default TripRestStops;
