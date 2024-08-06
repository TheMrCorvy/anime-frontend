/** SDK Entities */
export interface Request {
	headers?: HeadersInit;
	queryParams?: QueryParams;
}

export interface Response {
	error?: boolean;
	message?: string;
}

export interface PaginationQuery {
	page?: number;
	pageSize?: number;
}

export interface QueryParams {
	populate?: string | string[];
	sort?: string;
	filters?: Record<string, any>;
	pagination?: PaginationQuery;
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

/** SDK */
export interface StrapiSDK {
	register: Register;
	login: Login;
	me: Me;
}
