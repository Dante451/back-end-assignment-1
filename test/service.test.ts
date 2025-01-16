import { myServiceFunction } from "../src/services/myService";
import { myDependency } from "../src/dependencies/myDependency";

jest.mock("../src/dependencies/myDependency");

describe("myServiceFunction", () => {
	it("should return the expected value", () => {
		// Arrange
		const mockValue: string = "mocked value";
		myDependency.someMethod.mockReturnValue(mockValue);

		// Act
		const result: string = myServiceFunction();

		// Assert
		expect(result).toBe(mockValue);
	});
});