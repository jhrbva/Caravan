import React from 'react';
import { shallow } from 'enzyme';
import TripDetails from './TripDetails';

describe('Trip Details', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripDetails />);
		expect(wrapper).toMatchSnapshot();
	});
});
