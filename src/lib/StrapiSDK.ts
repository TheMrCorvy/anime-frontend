import type {
	Register,
	StrapiSDK,
	RegisterResponse,
	Login,
	LoginResponse,
	Me,
	MeResponse,
	ValidateRegisterToken,
	ValidateRegisterTokenResponse,
} from "@/types/StrapiSDK";
import buildQueryParams from "@/utils/buildQueryParams";
import { StrapiApiRoutes } from "@/utils/routes";

const host = process.env.STRAPI_API_HOST as string;

const register: Register = async (req) => {
	const method = "POST";
	const url = StrapiApiRoutes.register;
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
		...req.headers,
	};

	return (await fetch(host + url + queryParams, {
		method,
		headers,
		body: JSON.stringify(req),
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.code === 200) {
				return { ...json, ok: true };
			} else {
				return {
					...json,
					ok: true,
				};
			}
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<RegisterResponse>;
};

const login: Login = async (req) => {
	const method = "POST";
	const url = StrapiApiRoutes.login;
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
		...req.headers,
	};

	return (await fetch(host + url + queryParams, {
		method,
		headers,
		body: JSON.stringify(req),
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.code === 200) {
				return { ...json, ok: true };
			} else {
				return {
					...json,
					ok: true,
				};
			}
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<LoginResponse>;
};

const me: Me = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.me;
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	return (await fetch(host + url + queryParams, {
		method,
		headers,
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.code === 200) {
				return { ...json, ok: true };
			} else {
				return {
					...json,
					ok: true,
				};
			}
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<MeResponse>;
};

const validateRegisterToken: ValidateRegisterToken = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.registerToken;
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const tokenApiKey = process.env.STRAPI_REGISTER_TOKEN_API_KEY || "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: "Bearer " + tokenApiKey,
		...req.headers,
	};

	return (await fetch(host + url + `/${req.tokenId}` + queryParams, {
		method,
		headers,
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.code === 200) {
				return { ...json, ok: true };
			} else {
				return {
					...json,
					ok: true,
				};
			}
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<ValidateRegisterTokenResponse>;
};

const StrapiSDK: StrapiSDK = {
	register,
	login,
	me,
	validateRegisterToken,
};

export default StrapiSDK;
