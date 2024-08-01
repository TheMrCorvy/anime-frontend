import type {
	Register,
	StrapiSDK,
	RegisterResponse,
	Login,
	LoginResponse,
	Me,
	MeResponse,
} from "@/types/StrapiSDK";
import buildQueryParams from "@/utils/buildQueryParams";

const host = process.env.STRAPI_API_HOST as string;

const register: Register = async (req) => {
	const method = "POST";
	const url = "/api/auth/local/register";
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
				return json;
			} else {
				return {
					...json,
					error: true,
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
	const url = "/api/auth/local";
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
				return json;
			} else {
				return {
					...json,
					error: true,
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
	const url = "/api/users/me";
	const queryParams = req.queryParams
		? buildQueryParams(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		"Authorization": `Bearer ${req.jwt}`,
		...req.headers,
	};

	return (await fetch(host + url + queryParams, {
		method,
		headers,
	})
		.then((response) => response.json())
		.then((json) => {
			if (json.code === 200) {
				return json;
			} else {
				return {
					...json,
					error: true,
				};
			}
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<MeResponse>;
};

const StrapiSDK: StrapiSDK = {
	register,
	login,
	me,
};

export default StrapiSDK;
