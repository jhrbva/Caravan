import React from 'react';
import { shallow } from 'enzyme';
import Login, { LoginForm } from './Login';

describe('Login', () => {
	it('should match the snapshot', () => {
		const wrapper = shallow(<Login />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('LoginForm', () => {
	it('should have two fields', () => {
		const wrapper = shallow(<LoginForm />);
		const fieldWrapper = wrapper.find('Field');
		expect(fieldWrapper.length).toBe(2);
	});
	it('should have a username field', () => {
		const wrapper = shallow(<LoginForm />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'username' });
		expect(usernameField.length).toBe(1);
	});
	it('should have a password field', () => {
		const wrapper = shallow(<LoginForm />);
		const fieldWrapper = wrapper.find('Field');
		const usernameField = fieldWrapper.find({ name: 'password' });
		expect(usernameField.length).toBe(1);
	});
});
