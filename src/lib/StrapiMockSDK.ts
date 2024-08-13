import {
	mockLoginResponse,
	mockMeResponse,
	mockRegisterResponse,
} from "@/mocks/mockedResponses";
import type { Register, StrapiSDK, Login, Me } from "@/types/StrapiSDK";

const register: Register = async (req) => {
	return await Promise.resolve(mockRegisterResponse);
};

const login: Login = async (req) => {
	return await Promise.resolve(mockLoginResponse);
};

const me: Me = async (req) => {
	return await Promise.resolve(mockMeResponse);
};

const StrapiMockSDK: StrapiSDK = {
	register,
	login,
	me,
};

export default StrapiMockSDK;
