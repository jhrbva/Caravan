import React from 'react';
import { shallow } from 'enzyme';
import TripDetails from './TripDetails';

// some value to mock
const testDateTime = '2020-06-01T13:55:06.000Z';

describe('Trip Details', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripDetails />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('getDateTime()', () => {
	it('gets the date and time for a trip', () => {
		const wrapper = shallow(<TripDetails />);
		const instance = wrapper.instance();
		// set state date to be the mock value
		expect(instance.state.date).toBe('');
		instance.getDateTime();
		// check individual values against state
		expect(instance.tripDate).toBe('');
		expect(instance.tripTime).toBe('');
	});
});
