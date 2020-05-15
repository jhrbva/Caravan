import React from 'react';
import { Field } from 'formik';

import Input from '../Input/Input';
import Autocomplete from '../Autocomplete/Autocomplete';
import { required } from '../../utilities/formValidation';

import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EventIcon from '@material-ui/icons/Event';

const EmergencyContact = () => (
	<>
		<Field
			icon={<TitleIcon />}
			type='text'
			name='firstname'
			tag='FIRST NAME'
			validate={required}
			autoFocus={true}
			component={Input}
		/>
		<Field
			icon={<DescriptionIcon />}
			type='text'
			name='lastname'
			tag='LAST NAME'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<TripOriginIcon />}
			type='text'
			name='address'
			tag='ADDRESS'
			validate={required}
			autoFocus={false}
			component={Autocomplete}
		/>
		<Field
			icon={<LocationCityIcon />}
			type='text'
			name='phonenumber'
			tag='PHONE NUMBER'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
		<Field
			icon={<EventIcon />}
			type='text'
			name='relationship'
			tag='RELATIONSHIP'
			validate={required}
			autoFocus={false}
			component={Input}
		/>
	</>
);

export default EmergencyContact;
