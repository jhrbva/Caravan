import React from 'react';
import { shallow } from 'enzyme';
import ActionButtons from './ActionButtons';

describe('Action Buttons', () => {
	it('should match the snapshot for new invitation', () => {
		const wrapper = shallow(
			<ActionButtons userid={4} tripid={2} accepted={null} />
		);
		expect(wrapper).toMatchSnapshot();
	});
	it('should match the snapshot for accepted invitation', () => {
		const wrapper = shallow(
			<ActionButtons userid={4} tripid={2} accepted={true} />
		);
		expect(wrapper).toMatchSnapshot();
	});
	it('should match the snapshot for rejected invitation', () => {
		const wrapper = shallow(
			<ActionButtons userid={4} tripid={2} accepted={false} />
		);
		expect(wrapper).toMatchSnapshot();
	});
});
