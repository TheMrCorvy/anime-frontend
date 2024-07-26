export type exampleMethod = () => Promise<exampleMethodsResponse>;

export interface exampleMethodsResponse {
	success: boolean;
}

export interface StrapiSDK {
	exampleMethod: exampleMethod;
}
