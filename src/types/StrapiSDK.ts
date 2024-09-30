/** SDK Entities */
export interface Request {
	headers?: HeadersInit;
	queryParams?: QueryParams;
}

export interface ErrorObject {
	status: number;
	name: string;
	message: string;
	details: Object;
}

interface PluralResult {
	meta: {
		pagination?: PaginationObject;
	};
}

export interface Response extends PluralResult {
	error?: ErrorObject;
	message?: string;
	ok: boolean;
	status: number;
}

export interface NotFoundResponse extends Response {
	data: null;
}

export interface PaginationQuery {
	page?: number;
	pageSize?: number;
}

export interface PaginationObject {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

interface QueryObject {
	[key: string]: string | string[] | QueryObject;
}

type Equal = string | boolean | number | null;
type NotEqual = string | boolean | number | null;
type LessThan = number;
type LessThanOrEqual = number;
type GreaterThan = number;
type GreaterThanOrEqual = number;
type IncludedIn = string[];
type NotIncludedIn = string[];
type Contains = string;
type NotContains = string;
type Null = boolean;
type NotNull = boolean;
type Between = string[] | number[];
type StartsWith = string;
type EndsWith = string;
type And = QueryObject[];
type Not = QueryObject[];
type Or = QueryObject[];

interface QueryFilters {
	$and?: And;
	$or?: Or;
	$not?: Not;
	$eq?: Equal;
	$ne?: NotEqual;
	$in?: IncludedIn;
	$notIn?: NotIncludedIn;
	$lt?: LessThan;
	$lte?: LessThanOrEqual;
	$gt?: GreaterThan;
	$gte?: GreaterThanOrEqual;
	$between?: Between;
	$contains?: Contains;
	$notContains?: NotContains;
	$startsWith?: StartsWith;
	$endsWith?: EndsWith;
	$null?: Null;
	$notNull?: NotNull;
}

type QueryFiltersRecord = Partial<
	Record<keyof Directory | keyof AnimeEpisode, QueryFilters>
>;

export interface QueryParams {
	populate?: string | string[] | QueryObject;
	fields?: string | string[];
	sort?: string[];
	filters?: QueryFiltersRecord;
	pagination?: PaginationQuery;
	publicationState?: string;
	locale?: string | string[];
}

/** Strapi Entities */
export enum RoleTypes {
	ADULT_ANIME_WATCHER = "adult_anime_watcher",
	ANIME_WATCHER = "anime_watcher",
}

export interface Role {
	createdAt: Date;
	id: number;
	name: string;
	updatedAt: Date;
	type: RoleTypes | string;
	description: string;
}

export interface User {
	createdAt: Date;
	updatedAt: Date;
	email: string;
	username: string;
	id: number;
	provider: string;
	blocked: boolean;
	confirmed: boolean;
	role?: Role;
}

// http://localhost:1337/api/directories?filters[parent_directory][$null]=true&populate=parent_directory,sub_directories

export interface Directory {
	id: number;
	display_name: string;
	directory_path: string;
	createdAt: Date;
	updatedAt: Date;
	adult: boolean;
	parent_directory?: {
		data: DirectoryResponse | null;
	};
	sub_directories?: {
		data: DirectoryResponse[];
	};
	anime_episodes?: {
		data: AnimeEpisodeResponse[];
	};
}

// http://localhost:1337/api/anime-episodes?populate=parent_directory

export interface AnimeEpisode {
	id: number;
	display_name: string;
	file_path: string;
	createdAt: Date;
	updatedAt: Date;
	parent_directory: {
		data: DirectoryResponse;
	};
}

/** SDK Methods */
export interface RegisterRequest extends Request {
	email: string;
	username: string;
	password: string;
}

export interface RegisterResponse extends Response {
	jwt: string;
	user: User;
}

export type Register = (params: RegisterRequest) => Promise<RegisterResponse>;

export interface LoginRequest extends Request {
	identifier: string;
	password: string;
}

export interface LoginResponse extends Response {
	jwt: string;
	user: User;
}

export type Login = (params: LoginRequest) => Promise<LoginResponse>;

export interface MeRequest extends Request {
	jwt: string;
}

export interface MeResponse extends Response, User {
	role: Role;
}

export type Me = (params: MeRequest) => Promise<MeResponse>;

export interface ValidateRegisterTokenRequest extends Request {
	tokenId: number;
}

export interface RegisterToken {
	id: number;
	attributes: {
		token: string;
		user: string;
		createdAt: Date;
		updatedAt: Date;
		used: null | boolean;
	};
}

export interface ValidateRegisterTokenResponse extends Response {
	data: null | RegisterToken;
}

export type ValidateRegisterToken = (
	params: ValidateRegisterTokenRequest
) => Promise<ValidateRegisterTokenResponse>;

export interface InvalidateRegisterTokenRequest extends Request {
	tokenId: number;
}

export interface InvalidateRegisterTokenResponse extends Response {
	data: null | RegisterToken;
}

export type InvalidateRegisterToken = (
	params: InvalidateRegisterTokenRequest
) => Promise<InvalidateRegisterTokenResponse>;

export interface GetSingleDirectoryRequest extends Request {
	jwt: string;
	id: number;
}

export interface DirectoryResponse {
	id: number;
	attributes: {
		display_name: string;
		directory_path: string;
		createdAt: Date;
		updatedAt: Date;
		adult: boolean;
		parent_directory?: {
			data: DirectoryResponse | null;
		};
		sub_directories?: {
			data: DirectoryResponse[];
		};
	};
}

export interface GetSingleDirectoryResponse extends Response {
	data: DirectoryResponse;
}

export interface GetDirectoriesRequest extends Request {
	jwt: string;
}

export interface GetDirectoriesResponse extends Response {
	data: DirectoryResponse[];
}

export interface PluralDirectoryResult extends PluralResult {
	directories: Directory[];
}

export type GetDirectories = (
	params: GetDirectoriesRequest
) => Promise<PluralDirectoryResult>;

export type GetSingleDirectory = (
	params: GetSingleDirectoryRequest
) => Promise<Directory | NotFoundResponse>;

export interface GetSingleAnimeEpisodeRequest extends Request {
	jwt: string;
	id: number;
}

export interface AnimeEpisodeResponse {
	id: number;
	attributes: {
		display_name: string;
		file_path: string;
		createdAt: Date;
		updatedAt: Date;
		parent_directory?: {
			data: DirectoryResponse;
		};
	};
}

export interface GetSingleAnimeEpisodeResponse extends Response {
	data: AnimeEpisodeResponse;
}

export type GetSingleAnimeEpisode = (
	params: GetSingleAnimeEpisodeRequest
) => Promise<AnimeEpisode | NotFoundResponse>;

export interface GetAnimeEpisodesRequest extends Request {
	jwt: string;
	parent_directory: number;
}

export interface GetAnimeEpisodesResponse extends Response {
	data: AnimeEpisodeResponse[];
}

export interface PluralAnimeEpisodeResult extends PluralResult {
	anime_episodes: AnimeEpisode[];
}

export type GetAnimeEpisodes = (
	params: GetAnimeEpisodesRequest
) => Promise<PluralAnimeEpisodeResult>;

/** SDK */
export interface StrapiSDK {
	register: Register;
	login: Login;
	me: Me;
	validateRegisterToken: ValidateRegisterToken;
	invalidateRegisterToken: InvalidateRegisterToken;
	getDirectories: GetDirectories;
	getSingleDirectory: GetSingleDirectory;
	getSingleAnimeEpisode: GetSingleAnimeEpisode;
	getAnimeEpisodes: GetAnimeEpisodes;
}
