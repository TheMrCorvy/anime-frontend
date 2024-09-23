import { notFoundResponse } from "@/mocks/mockedResponses";
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
	GetSingleAnimeEpisode,
	GetSingleDirectory,
	GetSingleDirectoryResponse,
	NotFoundResponse,
	Directory,
	GetDirectories,
	PluralDirectoryResult,
	GetDirectoriesResponse,
	DirectoryResponse,
	AnimeEpisode,
	GetAnimeEpisodes,
	PluralAnimeEpisodeResult,
} from "@/types/StrapiSDK";
import { StrapiApiRoutes } from "@/utils/routes";
import QueryString from "qs";

const host = process.env.STRAPI_API_HOST as string;

const register: Register = async (req) => {
	const method = "POST";
	const url = StrapiApiRoutes.register;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
		...req.headers,
	};

	const uri = `${host}${url}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		? QueryString.stringify(req.queryParams)
		: "";
	const headers = {
		"Content-Type": "application/json",
		...req.headers,
	};

	const uri = `${host}${url}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		? QueryString.stringify(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	const uri = `${host}${url}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		? QueryString.stringify(req.queryParams)
		: "";
	const tokenApiKey = process.env.STRAPI_REGISTER_TOKEN_API_KEY || "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: "Bearer " + tokenApiKey,
		...req.headers,
	};

	const uri = `${host}${url}/${req.tokenId}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		? QueryString.stringify(req.queryParams)
		: "";
	const tokenApiKey = process.env.STRAPI_REGISTER_TOKEN_API_KEY || "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: "Bearer " + tokenApiKey,
		...req.headers,
	};

	const uri = `${host}${url}/${req.tokenId}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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

const getSingleDirectory: GetSingleDirectory = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.singleDirectory;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	const uri = `${host}${url}${req.id}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		.then((json) => {
			if (json.data !== null) {
				return {
					...json.data.attributes,
					id: json.data.id,
				};
			}

			return notFoundResponse;
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<Directory | NotFoundResponse>;
};

const getDirectories: GetDirectories = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.directories;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	const uri = `${host}${url}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		.then((json) => {
			return {
				...json,
				directories: json.data.map((item: DirectoryResponse) => ({
					...item.attributes,
					id: item.id,
				})),
			};
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<PluralDirectoryResult>;
};

const getSingleAnimeEpisode: GetSingleAnimeEpisode = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.singleAnimeEpisode;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	const uri = `${host}${url}${req.id}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		.then((json) => {
			if (json.data !== null) {
				return {
					...json.data.attributes,
					id: json.data.id,
				};
			}

			return notFoundResponse;
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<AnimeEpisode | NotFoundResponse>;
};

const getAnimeEpisodes: GetAnimeEpisodes = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.animeEpisodes;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";
	const headers: HeadersInit = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${req.jwt}`,
		...req.headers,
	};

	const uri = `${host}${url}?${queryParams}`;

	console.log({
		uri,
		method,
	});

	return (await fetch(uri, {
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
		.then((json) => {
			return json.data.map((item: DirectoryResponse) => ({
				...json,
				anime_episodes: {
					...item.attributes,
					id: item.id,
				},
			}));
		})
		.catch((error) => {
			console.error(error);
			throw new Error("Error processing the request");
		})) as Promise<PluralAnimeEpisodeResult>;
};

const StrapiSDK: StrapiSDK = {
	register,
	login,
	me,
	validateRegisterToken,
	invalidateRegisterToken,
	getSingleDirectory,
	getDirectories,
	getSingleAnimeEpisode,
	getAnimeEpisodes,
};

export default StrapiSDK;
