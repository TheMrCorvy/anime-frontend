import {
	LoginResponse,
	MeResponse,
	RegisterResponse,
	RoleTypes,
	ValidateRegisterTokenResponse,
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

export const mockUserToken = process.env.MOCK_USER_TOKEN || "";

export const mockRegisterResponse: RegisterResponse = {
	jwt: mockUserToken,
	user,
	ok: true,
};

export const mockLoginResponse: LoginResponse = {
	jwt: mockUserToken,
	user,
	ok: true,
};

export const mockMeResponse: MeResponse = {
	...user,
	ok: true,
	role: {
		id: 1,
		name: "Role Name",
		type: RoleTypes.ADULT_ANIME_WATCHER,
		description: "The role's description.",
		createdAt: new Date("2024-07-26T12:05:12.318Z"),
		updatedAt: new Date("2024-08-01T14:17:27.462Z"),
	},
};

interface RegisterTokens {
	[key: string]: ValidateRegisterTokenResponse;
}

export const registerTokens: RegisterTokens = {
	"1": {
		data: {
			id: 1,
			attributes: {
				token: "biur",
				user: "nicolas burello",
				createdAt: new Date("2024-08-28T19:57:00.103Z"),
				updatedAt: new Date("2024-08-28T20:03:15.770Z"),
				used: null,
			},
		},
		meta: {},
		ok: true,
	},
	"404": {
		data: null,
		meta: {},
		ok: false,
	},
};
