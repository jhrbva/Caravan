import React from 'react';
import { shallow } from 'enzyme';
import TripForm from './TripForm';

describe('TripForm', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<TripForm />);
		expect(wrapper).toMatchSnapshot();
	});
	it('changes page to Trip Guests', () => {
		const wrapper = shallow(<TripForm />);
		wrapper.setState({ page: 2 });
		expect(wrapper.state('page')).toEqual(2);
	});
	it('changes page to Trip Rest Stops', () => {
		const wrapper = shallow(<TripForm />);
		wrapper.setState({ page: 3 });
		expect(wrapper.state('page')).toEqual(3);
	});
});
