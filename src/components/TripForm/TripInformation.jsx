import React from 'react';
import { Field } from 'formik';

import Input from '../Input/Input';
import DatePickerInput from '../DatePicker/DatePickerInput';
import { required } from '../../utilities/formValidation';

import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';

const TripInformation = () => (
	<>
		<Field
			icon={<TitleIcon />}
			type='text'
			name='trip_title'
			tag='TRIP TITLE'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<DescriptionIcon />}
			type='text'
			name='trip_description'
			tag='DESCRIPTION'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<TripOriginIcon />}
			type='text'
			name='start_location'
			tag='START LOCATION'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<LocationCityIcon />}
			type='text'
			name='destination'
			tag='DESTINATION'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<EventIcon />}
			type='text'
			name='start_date'
			tag='DATE'
			validate={required}
			autoFocus={false}
			component={DatePickerInput}
		/>
	</>
);

export default TripInformation;
