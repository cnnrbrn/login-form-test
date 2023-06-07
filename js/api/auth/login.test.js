import { login } from "./login.js";
import { USER_DATA, mockFetchSuccess } from "../../mocks/api/login.js";
import { mockFetchFailure } from "../../mocks/api/failure.js";

describe("login", () => {
	it("return a user object if the call is successful", async () => {
		global.fetch = mockFetchSuccess;
		const data = await login({});
		expect(data).toEqual(USER_DATA);
	});

	it("throws an error when the request fails", async () => {
		global.fetch = mockFetchFailure;
		await expect(login({})).rejects.toThrow("Either the username or password is incorrect");
	});
});
