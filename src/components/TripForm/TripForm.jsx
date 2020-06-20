import React from 'react';

import TripFormContainer from './TripFormContainer';
import TripInformation from './TripInformation';
import TripGuests from './TripGuests';
import TripRestStops from './TripRestStops';

const TripForm = (props) => (
	<>
		<TripFormContainer
			initialValues={{
				trip_title: '',
				trip_description: '',
				start_location: '',
				destination: '',
				start_date: '',
				start_time: '',
				guests: '',
				rest_stops: '',
			}}
			userid={props.userid}
		>
			<TripFormContainer.Page>
				<TripInformation />
			</TripFormContainer.Page>
			<TripFormContainer.Page>
				<TripGuests />
			</TripFormContainer.Page>
			<TripFormContainer.Page>
				<TripRestStops />
			</TripFormContainer.Page>
		</TripFormContainer>
	</>
);

export default TripForm;
