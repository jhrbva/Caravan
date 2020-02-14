const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const phoneRegex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

// Error Messages
export const requiredError = "Required";
export const invalidEmail = "Invalid email address";
export const invalidPhone = "Invalid phone number";

// Validation Functions
export const validateEmail = value => {
	let error;
	if (!value) error = requiredError;
	else if (!emailRegex.test(value)) error = invalidEmail;
	return error;
};

export const validatePhone = value => {
	let error;
	if (!value) error = "Required";
	else if (!phoneRegex.test(value)) error = invalidPhone;
	return error;
};
