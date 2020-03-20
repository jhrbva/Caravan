import React from 'react';
import { Field, Form } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';

const TripRestStops = () => (
	<Form>
		<Field
			icon='location_on'
			type='text'
			name='rest_stops'
			placeholder='Rest Stop'
			autoFocus={true}
			component={Input}
		/>
	</Form>
);

export default TripRestStops;
