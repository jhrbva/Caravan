import React from 'react';
import { shallow } from 'enzyme';
import TripDetails, { getDateTime } from './TripDetails';

const testDateTime = '2020-06-01T13:00:06.000Z';
const trip = {
	trip_title: 'Wonders of the Canyon',
	tripdate: testDateTime,
	trip_description: 'Join in as we travel to the Grand Canyon',
	startlocation: '123 OneTreeHill St.',
	destination: 'Grand Canyon, Grand Canyon Ave.',
};
const reststops = [{ location: 'Wawa' }, { location: 'Loves' }];
const host = [
	{
		userid: 1,
		firstname: 'Connie',
		lastname: 'Pink',
		username: 'conniecode',
		email: 'connie@gmail.com',
		phonenumber: '1234567890',
	},
];
const members = [
	[
		{
			userid: 4,
			firstname: 'Julia',
			lastname: 'Red',
			username: 'jcode',
			email: 'julia@gmail.com',
			phonenumber: '4567890123',
		},
	],
];

describe('Trip Details', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(
			<TripDetails
				trip={trip}
				host={host}
				members={members}
				reststops={reststops}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});
});
