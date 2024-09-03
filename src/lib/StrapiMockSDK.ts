import {
	mockLoginResponse,
	mockMeResponse,
	mockRegisterResponse,
	registerTokens,
} from "@/mocks/mockedResponses";
import type {
	Register,
	StrapiSDK,
	Login,
	Me,
	ValidateRegisterTokenResponse,
	ValidateRegisterToken,
	InvalidateRegisterToken,
	InvalidateRegisterTokenResponse,
} from "@/types/StrapiSDK";

const register: Register = async (req) => {
	return await Promise.resolve(mockRegisterResponse);
};

const login: Login = async (req) => {
	return await Promise.resolve(mockLoginResponse);
};

const me: Me = async (req) => {
	return await Promise.resolve(mockMeResponse);
};

const validateRegisterToken: ValidateRegisterToken = async (req) => {
	let response: ValidateRegisterTokenResponse;

	const mockedResponse = registerTokens[req.tokenId.toString()] as
		| ValidateRegisterTokenResponse
		| undefined;

	if (mockedResponse !== undefined) {
		response = mockedResponse;
	} else {
		response = registerTokens["404"];
	}

	return (await Promise.resolve(response)) as ValidateRegisterTokenResponse;
};

const invalidateRegisterToken: InvalidateRegisterToken = async (req) => {
	let response: ValidateRegisterTokenResponse;

	const mockedResponse = registerTokens[req.tokenId.toString()] as
		| ValidateRegisterTokenResponse
		| undefined;

	if (mockedResponse !== undefined) {
		response = mockedResponse;
	} else {
		response = registerTokens["404"];
	}

	return (await Promise.resolve(response)) as InvalidateRegisterTokenResponse;
};

const StrapiMockSDK: StrapiSDK = {
	register,
	login,
	me,
	validateRegisterToken,
	invalidateRegisterToken,
};

export default StrapiMockSDK;
