import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<Dashboard />);
		expect(wrapper).toMatchSnapshot();
	});
});
