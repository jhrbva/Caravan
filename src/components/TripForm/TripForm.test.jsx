import React from 'react';
import { shallow } from 'enzyme';
import TripForm from './TripForm';

describe('TripForm', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripForm />);
		expect(wrapper).toMatchSnapshot();
	});
});
