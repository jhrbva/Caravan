import React from 'react';
import { Field, Form } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import BigButton from '../BigButton/BigButton';

const TripRestStops = ({ handleBack, handleSubmit }) => (
	<Form>
		<Field
			icon='location_on'
			type='text'
			name='rest_stops'
			placeholder='Rest Stop'
			autofocus='true'
			component={Input}
		/>
		<BigButton value={'Back'} onClick={handleBack} />
		<BigButton value={'Submit'} onClick={handleSubmit} />
	</Form>
);

export default TripRestStops;
