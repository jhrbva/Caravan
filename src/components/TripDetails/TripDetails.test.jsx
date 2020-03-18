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
		expect(instance.state.date).toBe('');
		instance.setState({ date: testDateTime });
		const results = instance.getDateTime();
		expect(results.tripDate).toBe('2020-06-01');
		expect(results.tripTime).toBe('13:55:06');
	});
});
