import React from 'react';
import { Field } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';

import LocationOnIcon from '@material-ui/icons/LocationOn';

const TripRestStops = () => (
	<>
		<Field
			icon={<LocationOnIcon />}
			type='text'
			name='rest_stops'
			placeholder='Rest Stop'
			autoFocus={true}
			component={Input}
		/>
	</>
);

export default TripRestStops;
