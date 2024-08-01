import {
	LoginResponse,
	MeResponse,
	RegisterResponse,
	RoleTypes,
} from "@/types/StrapiSDK";

const user = {
	id: 1,
	email: "email@email.com",
	username: "username",
	blocked: false,
	confirmed: true,
	provider: "local",
	createdAt: new Date("2024-08-01T13:25:55.789Z"),
	updatedAt: new Date("2024-08-01T13:25:55.789Z"),
};

const jwt = "jwt_token";

export const mockRegisterResponse: RegisterResponse = {
	jwt,
	user,
};

export const mockLoginResponse: LoginResponse = {
	jwt,
	user,
};

export const mockMeResponse: MeResponse = {
	...user,
	role: {
		id: 1,
		name: "Role Name",
		type: RoleTypes.ADULT_ANIME_WATCHER,
		description: "The role's description.",
		createdAt: new Date("2024-07-26T12:05:12.318Z"),
		updatedAt: new Date("2024-08-01T14:17:27.462Z"),
	},
};
