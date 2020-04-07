import React from 'react';
import { shallow } from 'enzyme';
import ActionButtons from './ActionButtons';

describe('Action Buttons', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<ActionButtons />);
		expect(wrapper).toMatchSnapshot();
	});
});
