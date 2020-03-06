import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to the Caravan App</h2>;
	expect(wrapper).toContainReact(welcome);
});
