import {
	mockAnimeEpisodes,
	mockAnimeEpisodesResponse,
	mockDirectories,
	mockLoginResponse,
	mockMeResponse,
	mockRegisterResponse,
	notFoundResponse,
	registerTokens,
} from "@/mocks/mockedResponses";
import { FeatureNames } from "@/services/featureFlagService";
import type {
	Register,
	StrapiSDK,
	Login,
	Me,
	ValidateRegisterTokenResponse,
	ValidateRegisterToken,
	InvalidateRegisterToken,
	InvalidateRegisterTokenResponse,
	GetSingleAnimeEpisode,
	GetSingleDirectory,
	GetAnimeEpisodes,
	PluralAnimeEpisodeResult,
	PluralDirectoryResult,
	GetDirectories,
} from "@/types/StrapiSDK";
import logData from "@/utils/logData";
import { StrapiApiRoutes } from "@/utils/routes";
import QueryString from "qs";

const host = process.env.STRAPI_API_HOST as string;

const register: Register = async (req) => {
	const method = "POST";
	const url = StrapiApiRoutes.register;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "register",
	});

	return await Promise.resolve(mockRegisterResponse);
};

const login: Login = async (req) => {
	const method = "POST";
	const url = StrapiApiRoutes.login;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "login",
	});

	return await Promise.resolve(mockLoginResponse);
};

const me: Me = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.me;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "me",
	});

	return await Promise.resolve(mockMeResponse);
};

const validateRegisterToken: ValidateRegisterToken = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.registerToken;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "validateRegisterToken",
	});

	let response: ValidateRegisterTokenResponse;

	const mockedResponse = registerTokens[req.token] as
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
	const method = "PUT";
	const url = StrapiApiRoutes.registerToken;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "invalidateRegisterToken",
	});

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

const getSingleAnimeEpisode: GetSingleAnimeEpisode = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.singleAnimeEpisode;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "getSingleAnimeEpisode",
	});

	const episodeFound = mockAnimeEpisodes[req.id];

	if (episodeFound) {
		return await Promise.resolve({ ...episodeFound });
	}

	return await Promise.resolve({ ...notFoundResponse });
};

const getAnimeEpisodes: GetAnimeEpisodes = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.animeEpisodes;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "getAnimeEpisodes",
	});

	return (await Promise.resolve({
		ok: true,
		meta: {},
		status: 200,
		anime_episodes: mockAnimeEpisodes,
	})) as PluralAnimeEpisodeResult;
};

const getSingleDirectory: GetSingleDirectory = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.singleDirectory;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "getSingleDirectory",
	});

	const directoryFound = mockDirectories.find(
		(directory) => req.id === directory.id
	);

	if (directoryFound) {
		return await Promise.resolve({
			...directoryFound,
			anime_episodes: {
				data: mockAnimeEpisodesResponse.filter(
					(ep) =>
						ep.attributes.parent_directory?.data.id ===
						directoryFound.id
				),
			},
		});
	}

	return await Promise.resolve({ ...notFoundResponse });
};

const getDirectories: GetDirectories = async (req) => {
	const method = "GET";
	const url = StrapiApiRoutes.directories;
	const queryParams = req.queryParams
		? QueryString.stringify(req.queryParams)
		: "";

	const uri = `${host}${url}?${queryParams}`;

	logData({
		data: {
			uri,
			method,
		},
		ff: FeatureNames.LOG_EXTERNAL_HTTP_REQUESTS,
		title: "getDirectories",
	});

	return (await Promise.resolve({
		ok: true,
		meta: {},
		status: 200,
		directories: mockDirectories,
	})) as PluralDirectoryResult;
};

const StrapiMockSDK: StrapiSDK = {
	register,
	login,
	me,
	validateRegisterToken,
	invalidateRegisterToken,
	getDirectories,
	getSingleDirectory,
	getAnimeEpisodes,
	getSingleAnimeEpisode,
};

export default StrapiMockSDK;
