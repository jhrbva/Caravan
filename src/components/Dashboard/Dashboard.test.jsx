import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard';

const mockTrip = {
	trip_title: 'Brunch at gold statue :P',
	trip_description: "Let's see Rockefeller",
	startlocation: '1307 Florence Avenue, Plainfield, NJ 07060',
	destination: '45 Rockefeller Plaza, New York, NY, 10111',
	tripdate: '2020-06-01T13:55:06.000Z',
};
const reststops = [{ location: 'Wawa' }, { location: 'Loves' }];
const host = {username: 'conniecode'};
const members = [{username: 'jcode'}];

describe('Dashboard', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<Dashboard user={{}} />);
		wrapper.setState({ invitations: [mockTrip] });
		wrapper.setState({ tripsJoined: [mockTrip] });
		wrapper.setState({ tripsHosted: [mockTrip] });
		wrapper.setState({ host: [host] });
		wrapper.setState({ members: [members] });
		wrapper.setState({ reststops: [reststops] });

		expect(wrapper).toMatchSnapshot();
	});
});
