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
	InvalidateRegisterToken,
	InvalidateRegisterTokenResponse,
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
		.then(async (response) => {
			const data = await response.json();

			if (!response.ok) {
				return {
					...data,
					ok: false,
				};
			}

			return {
				...data,
				ok: true,
			};
		})
		.then((json) => json)
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
		.then(async (response) => {
			const data = await response.json();

			if (!response.ok) {
				return {
					...data,
					ok: false,
				};
			}

			return {
				...data,
				ok: true,
			};
		})
		.then((json) => json)
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
		.then(async (response) => {
			const data = await response.json();

			if (!response.ok) {
				return {
					...data,
					ok: false,
				};
			}

			return {
				...data,
				ok: true,
			};
		})
		.then((json) => json)
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
		.then(async (response) => {
			const data = await response.json();

			if (!response.ok) {
				return {
					...data,
					ok: false,
				};
			}

			return {
				...data,
				ok: true,
			};
		})
		.then((json) => json)
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<ValidateRegisterTokenResponse>;
};

const invalidateRegisterToken: InvalidateRegisterToken = async (req) => {
	const method = "PUT";
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
		body: JSON.stringify({
			data: {
				used: true,
			},
		}),
	})
		.then(async (response) => {
			const data = await response.json();

			if (!response.ok) {
				return {
					...data,
					ok: false,
				};
			}

			return {
				...data,
				ok: true,
			};
		})
		.then((json) => json)
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<InvalidateRegisterTokenResponse>;
};

const StrapiSDK: StrapiSDK = {
	register,
	login,
	me,
	validateRegisterToken,
	invalidateRegisterToken,
};

export default StrapiSDK;
