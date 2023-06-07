export const USER_DATA = {
	id: 1,
	email: "test@test.com",
	token: "1234567890",
};

export const mockFetchSuccess = jest.fn().mockResolvedValue({
	ok: true,
	json: jest.fn().mockResolvedValue(USER_DATA),
});
