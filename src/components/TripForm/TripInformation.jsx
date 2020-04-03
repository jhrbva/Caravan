import React from 'react';
import { Field } from 'formik';
import '../../utilities/fonts.scss';
import Input from '../Input/Input';
import { required } from '../../utilities/formValidation';

import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';

const TripInformation = () => (
	<>
		<Field
			icon={<TitleIcon />}
			type='text'
			name='trip_title'
			placeholder='Trip Title'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<DescriptionIcon />}
			type='text'
			name='trip_description'
			placeholder='Description'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<TripOriginIcon />}
			type='text'
			name='start_location'
			placeholder='Start Location'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<LocationCityIcon />}
			type='text'
			name='destination'
			placeholder='Destination'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<EventIcon />}
			type='text'
			name='start_date'
			placeholder='Date'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<ScheduleIcon />}
			type='text'
			name='start_time'
			placeholder='Time'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
	</>
);

export default TripInformation;
