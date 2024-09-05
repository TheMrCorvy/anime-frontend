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

export interface Response {
	error?: ErrorObject;
	message?: string;
	ok: boolean;
}

export interface PaginationQuery {
	page?: number;
	pageSize?: number;
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
	parent_directory: {
		data: Directory | null;
	};
	sub_directories: {
		data: Directory[];
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
		data: Directory;
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
	meta: Object;
}

export type ValidateRegisterToken = (
	params: ValidateRegisterTokenRequest
) => Promise<ValidateRegisterTokenResponse>;

export interface InvalidateRegisterTokenRequest extends Request {
	tokenId: number;
}

export interface InvalidateRegisterTokenResponse extends Response {
	data: null | RegisterToken;
	meta: Object;
}

export type InvalidateRegisterToken = (
	params: InvalidateRegisterTokenRequest
) => Promise<InvalidateRegisterTokenResponse>;

export interface GetDirectoriesRequest extends Request {
	jwt: string;
}

/** SDK */
export interface StrapiSDK {
	register: Register;
	login: Login;
	me: Me;
	validateRegisterToken: ValidateRegisterToken;
	invalidateRegisterToken: InvalidateRegisterToken;
}
