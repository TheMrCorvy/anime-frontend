import {
	mockLoginResponse,
	mockMeResponse,
	mockRegisterResponse,
} from "@/mocks/mockedResponses";
import type { Register, StrapiSDK, Login, Me } from "@/types/StrapiSDK";
import buildQueryParams from "@/utils/buildQueryParams";

const register: Register = async (req) => {
	const method = "POST";
	const url = "/api/auth/local/register";
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
	};

	const registerResponse = mockRegisterResponse;

	return await Promise.resolve(registerResponse);
};

const login: Login = async (req) => {
	const method = "POST";
	const url = "/api/auth/local/register";
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
	};

	const loginResponse = mockLoginResponse;

	return await Promise.resolve(loginResponse);
};

const me: Me = async (req) => {
	const method = "POST";
	const url = "/api/auth/local/register";
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
	};

	const meResponse = mockMeResponse;

	return await Promise.resolve(meResponse);
};

const StrapiMockSDK: StrapiSDK = {
	register,
	login,
	me,
};

export default StrapiMockSDK;
