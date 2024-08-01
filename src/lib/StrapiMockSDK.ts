import type {
	Register,
	RegisterResponse,
	StrapiSDK,
	Login,
	LoginResponse,
	Me,
	MeResponse,
} from "@/types/StrapiSDK";
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

	const registerResponse: RegisterResponse = {
		jwt: "jwt_token",
		user: {
			id: 1,
			email: "email@email.com",
			username: "username",
			blocked: false,
			confirmed: true,
			provider: "local",
			createdAt: new Date("2024-08-01T13:25:55.789Z"),
			updatedAt: new Date("2024-08-01T13:25:55.789Z"),
		},
	};

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

	const loginResponse: LoginResponse = {
		jwt: "jwt_token",
		user: {
			id: 1,
			email: "email@email.com",
			username: "username",
			blocked: false,
			confirmed: true,
			provider: "local",
			createdAt: new Date("2024-08-01T13:25:55.789Z"),
			updatedAt: new Date("2024-08-01T13:25:55.789Z"),
		},
	};

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

	const loginResponse: MeResponse = {
		email: "email@email.com",
		username: "username",
		id: 1,
		blocked: false,
		confirmed: true,
		provider: "local",
		role: {
			id: 1,
			name: "Role Name",
			type: "role_name",
			description: "The role's description.",
			createdAt: new Date("2024-07-26T12:05:12.318Z"),
			updatedAt: new Date("2024-08-01T14:17:27.462Z"),
		},
		createdAt: new Date("2024-08-01T13:25:55.789Z"),
		updatedAt: new Date("2024-08-01T13:25:55.789Z"),
	};

	return await Promise.resolve(loginResponse);
};

const StrapiMockSDK: StrapiSDK = {
	register,
	login,
	me,
};

export default StrapiMockSDK;
