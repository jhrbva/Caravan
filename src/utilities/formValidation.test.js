import { validateEmail, validatePhone } from "./formValidation";

describe("validateEmail", () => {
	it("should return false for values without @", () => {
		expect(validateEmail("yaAtyahoo.com")).toBeFalsy();
	});

	it("should return false for values without a .ext", () => {
		expect(validateEmail("ya@yahoo")).toBeFalsy();
	});

	it("should return true for emails with an @ and .ext", () => {
		expect(validateEmail("ya@yahoo.com")).toBeTruthy();
	});
});

describe("validatePhone", () => {
	it("should return false for values with alphabetical characters", () => {
		expect(validatePhone("123a456b784")).toBeFalsy();
	});

	it("should return false for values less than 10 numerical characters", () => {
		expect(validatePhone("1234")).toBeFalsy();
	});

	it("should return true for phone number with dashes", () => {
		expect(validatePhone("123-456-7890")).toBeTruthy();
	});

	it("should return true for phone number with parentheses and dashes", () => {
		expect(validatePhone("(123)4567890")).toBeTruthy();
	});

	it("should return true for phone number with parentheses and dashes", () => {
		expect(validatePhone("(123)-456-7890")).toBeTruthy();
	});

	it("should return true for phone number with country code", () => {
		expect(validatePhone("+1 (123)-456-7890")).toBeTruthy();
	});
});
