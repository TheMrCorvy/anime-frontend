import {
	mockAnimeEpisodes,
	mockDirectories,
	mockLoginResponse,
	mockMeResponse,
	mockRegisterResponse,
	notFoundResponse,
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
	GetSingleAnimeEpisode,
	GetSingleDirectory,
	GetAnimeEpisodes,
	PluralAnimeEpisodeResult,
	PluralDirectoryResult,
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

const getSingleAnimeEpisode: GetSingleAnimeEpisode = async (params) => {
	const episodeFound = mockAnimeEpisodes[params.id];

	if (episodeFound) {
		return await Promise.resolve({ ...episodeFound });
	}

	return await Promise.resolve({ ...notFoundResponse });
};

const getAnimeEpisodes: GetAnimeEpisodes = async () => {
	return (await Promise.resolve({
		ok: true,
		meta: {},
		status: 200,
		anime_episodes: mockAnimeEpisodes,
	})) as PluralAnimeEpisodeResult;
};

const getSingleDirectory: GetSingleDirectory = async (params) => {
	const directoryFound = mockDirectories[params.id];

	if (directoryFound) {
		return await Promise.resolve({ ...directoryFound });
	}

	return await Promise.resolve({ ...notFoundResponse });
};

const getDirectories = async () => {
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
