import {
	AnimeEpisode,
	AnimeEpisodeResponse,
	Directory,
	ErrorObject,
	LoginResponse,
	MeResponse,
	NotFoundResponse,
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
	meta: {},
	status: 200,
};

export const mockLoginResponse: LoginResponse = {
	jwt: mockUserToken,
	user,
	ok: true,
	meta: {},
	status: 200,
};

export const notFoundResponse: NotFoundResponse = {
	status: 404,
	data: null,
	ok: false,
	meta: {},
	error: {
		status: 404,
		name: "NotFoundError",
		message: "Not Found",
		details: {},
	},
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
	meta: {},
	status: 200,
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
		status: 200,
	},
	"404": {
		data: null,
		meta: {},
		ok: false,
		status: 404,
	},
};

export const mockAnimeEpisodes: AnimeEpisode[] = [
	{
		id: 1,
		display_name: "1 - first anime",
		file_path: "C:/first_anime/1-first_anime.mp4",
		createdAt: new Date("2024-09-04T16:22:44.167Z"),
		updatedAt: new Date("2024-09-04T16:22:44.167Z"),
		parent_directory: {
			data: {
				id: 1,
				attributes: {
					display_name: "first anime",
					directory_path: "C:/first_anime",
					createdAt: new Date("2024-09-04T16:18:55.433Z"),
					updatedAt: new Date("2024-09-04T16:18:55.433Z"),
					adult: false,
				},
			},
		},
	},
	{
		id: 2,
		display_name: "2 - first anime",
		file_path: "C:/first_anime/2-first_anime.mp4",
		createdAt: new Date("2024-09-04T16:23:16.014Z"),
		updatedAt: new Date("2024-09-04T16:23:16.014Z"),
		parent_directory: {
			data: {
				id: 1,
				attributes: {
					display_name: "first anime",
					directory_path: "C:/first_anime",
					createdAt: new Date("2024-09-04T16:18:55.433Z"),
					updatedAt: new Date("2024-09-04T16:18:55.433Z"),
					adult: false,
				},
			},
		},
	},
];

export const mockDirectories: Directory[] = [
	{
		id: 1,
		display_name: "first anime",
		directory_path: "C:/first_anime",
		createdAt: new Date("2024-09-04T16:18:55.433Z"),
		updatedAt: new Date("2024-09-04T16:18:55.433Z"),
		adult: false,
		parent_directory: {
			data: null,
		},
		sub_directories: {
			data: [],
		},
	},
	{
		id: 2,
		display_name: "second anime",
		directory_path: "C:/second_anime",
		createdAt: new Date("2024-09-04T16:19:24.402Z"),
		updatedAt: new Date("2024-09-04T16:19:24.402Z"),
		adult: false,
		parent_directory: {
			data: null,
		},
		sub_directories: {
			data: [],
		},
	},
	{
		id: 3,
		display_name: "anime with sub-folder",
		directory_path: "C:/anime_with_sub_folder",
		createdAt: new Date("2024-09-04T16:20:01.043Z"),
		updatedAt: new Date("2024-09-04T16:21:32.486Z"),
		adult: false,
		parent_directory: {
			data: null,
		},
		sub_directories: {
			data: [
				{
					id: 4,
					attributes: {
						display_name: "sub folder",
						directory_path: "C:/anime_with_sub_folder/sub_folder",
						createdAt: new Date("2024-09-04T16:20:31.090Z"),
						updatedAt: new Date("2024-09-04T16:21:58.601Z"),
						adult: false,
					},
				},
			],
		},
	},
	{
		id: 5,
		display_name: "adult anime",
		directory_path: "C:/adult_anime",
		createdAt: new Date("2024-09-04T16:29:55.581Z"),
		updatedAt: new Date("2024-09-04T16:29:55.581Z"),
		adult: true,
		parent_directory: {
			data: null,
		},
		sub_directories: {
			data: [],
		},
	},
];

export const mockAnimeEpisodesResponse: AnimeEpisodeResponse[] = [
	{
		id: 1,
		attributes: {
			display_name: "1 - first anime",
			file_path: "C:/first_anime/1-first_anime.mp4",
			createdAt: new Date("2024-09-04T16:22:44.167Z"),
			updatedAt: new Date("2024-09-04T16:22:44.167Z"),
			parent_directory: {
				data: {
					id: 1,
					attributes: {
						display_name: "first anime test",
						directory_path: "C:/first_anime",
						createdAt: new Date("2024-09-04T16:18:55.433Z"),
						updatedAt: new Date("2024-09-29T20:57:14.286Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 2,
		attributes: {
			display_name: "2 - first anime",
			file_path: "C:/first_anime/2-first_anime.mp4",
			createdAt: new Date("2024-09-04T16:23:16.014Z"),
			updatedAt: new Date("2024-09-04T16:23:16.014Z"),
			parent_directory: {
				data: {
					id: 1,
					attributes: {
						display_name: "first anime test",
						directory_path: "C:/first_anime",
						createdAt: new Date("2024-09-04T16:18:55.433Z"),
						updatedAt: new Date("2024-09-29T20:57:14.286Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 3,
		attributes: {
			display_name: "1 - second anime",
			file_path: "C:/second_anime/1-second_anime.mp4",
			createdAt: new Date("2024-09-04T16:23:53.389Z"),
			updatedAt: new Date("2024-09-04T16:23:53.389Z"),
			parent_directory: {
				data: {
					id: 2,
					attributes: {
						display_name: "second anime",
						directory_path: "C:/second_anime",
						createdAt: new Date("2024-09-04T16:19:24.402Z"),
						updatedAt: new Date("2024-09-04T16:19:24.402Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 4,
		attributes: {
			display_name: "2 - second anime",
			file_path: "C:/second_anime/2-second_anime.mp4",
			createdAt: new Date("2024-09-04T16:24:51.040Z"),
			updatedAt: new Date("2024-09-04T16:24:51.040Z"),
			parent_directory: {
				data: {
					id: 2,
					attributes: {
						display_name: "second anime",
						directory_path: "C:/second_anime",
						createdAt: new Date("2024-09-04T16:19:24.402Z"),
						updatedAt: new Date("2024-09-04T16:19:24.402Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 5,
		attributes: {
			display_name: "1 - anime with sub folder",
			file_path: "C:/anime_with_sub_folder/1-anime_with_sub_folder.mp4",
			createdAt: new Date("2024-09-04T16:26:12.142Z"),
			updatedAt: new Date("2024-09-04T16:27:02.419Z"),
			parent_directory: {
				data: {
					id: 3,
					attributes: {
						display_name: "anime with sub-folder",
						directory_path: "C:/anime_with_sub_folder",
						createdAt: new Date("2024-09-04T16:20:01.043Z"),
						updatedAt: new Date("2024-09-04T16:21:32.486Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 6,
		attributes: {
			display_name: "2 - anime with sub folder",
			file_path: "C:/anime_with_sub_folder/2-anime_with_sub_folder.mp4",
			createdAt: new Date("2024-09-04T16:27:38.362Z"),
			updatedAt: new Date("2024-09-04T16:27:38.362Z"),
			parent_directory: {
				data: {
					id: 3,
					attributes: {
						display_name: "anime with sub-folder",
						directory_path: "C:/anime_with_sub_folder",
						createdAt: new Date("2024-09-04T16:20:01.043Z"),
						updatedAt: new Date("2024-09-04T16:21:32.486Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 7,
		attributes: {
			display_name: "1 - sub folder",
			file_path: "C:/anime_with_sub_folder/sub_folder/1-sub_folder.mp4",
			createdAt: new Date("2024-09-04T16:28:29.974Z"),
			updatedAt: new Date("2024-09-04T16:28:29.974Z"),
			parent_directory: {
				data: {
					id: 4,
					attributes: {
						display_name: "sub folder",
						directory_path: "C:/anime_with_sub_folder/sub_folder",
						createdAt: new Date("2024-09-04T16:20:31.090Z"),
						updatedAt: new Date("2024-09-04T16:21:58.601Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 8,
		attributes: {
			display_name: "2 - sub folder",
			file_path: "C:/anime_with_sub_folder/sub_folder/2-sub_folder.mp4",
			createdAt: new Date("2024-09-04T16:28:58.541Z"),
			updatedAt: new Date("2024-09-04T16:28:58.541Z"),
			parent_directory: {
				data: {
					id: 4,
					attributes: {
						display_name: "sub folder",
						directory_path: "C:/anime_with_sub_folder/sub_folder",
						createdAt: new Date("2024-09-04T16:20:31.090Z"),
						updatedAt: new Date("2024-09-04T16:21:58.601Z"),
						adult: false,
					},
				},
			},
		},
	},
	{
		id: 9,
		attributes: {
			display_name: "1 - adult anime",
			file_path: "C:/adult_anime/1-adult_anime.mp4",
			createdAt: new Date("2024-09-04T16:30:37.769Z"),
			updatedAt: new Date("2024-09-04T16:30:37.769Z"),
			parent_directory: {
				data: {
					id: 5,
					attributes: {
						display_name: "adult anime",
						directory_path: "C:/adult_anime",
						createdAt: new Date("2024-09-04T16:29:55.581Z"),
						updatedAt: new Date("2024-09-04T16:29:55.581Z"),
						adult: true,
					},
				},
			},
		},
	},
	{
		id: 10,
		attributes: {
			display_name: "2 - adult anime",
			file_path: "C:/adult_anime/2-adult_anime.mp4",
			createdAt: new Date("2024-09-04T16:31:05.930Z"),
			updatedAt: new Date("2024-09-04T16:31:05.930Z"),
			parent_directory: {
				data: {
					id: 5,
					attributes: {
						display_name: "adult anime",
						directory_path: "C:/adult_anime",
						createdAt: new Date("2024-09-04T16:29:55.581Z"),
						updatedAt: new Date("2024-09-04T16:29:55.581Z"),
						adult: true,
					},
				},
			},
		},
	},
];
