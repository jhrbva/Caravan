import React from 'react';
import { shallow } from 'enzyme';
import TripDetails, { getDateTime } from './TripDetails';

const testDateTime = '2020-06-01T13:55:06.000Z';
const members = ['conniecode', 'jrobazzi', 'kcode'];
const trip = {
	trip_title: 'Wonders of the Canyon',
	tripdate: testDateTime,
	trip_description: 'Join in as we travel to the Grand Canyon',
	startlocation: '123 OneTreeHill St.',
	destination: 'Grand Canyon, Grand Canyon Ave.',
};
const reststops = [{ location: 'Wawa' }, { location: 'Loves' }];

describe('Trip Details', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(
			<TripDetails trip={trip} members={members} reststops={reststops} />
		);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('getDateTime()', () => {
	it('gets the date and time for a trip', () => {
		const results = getDateTime(testDateTime);
		expect(results.tripDate).toBe('2020-06-01');
		expect(results.tripTime).toBe('13:55:06');
	});
});
