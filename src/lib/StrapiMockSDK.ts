import {
	type exampleMethod,
	type exampleMethodsResponse,
	type StrapiSDK,
} from "@/types/StrapiSDK";

const exampleMethod: exampleMethod = async () => {
	const method = "GET";
	const url = "/api/example";
	const headers = {
		"Content-Type": "application/json",
	};

	return Promise.resolve({
		success: true,
	}) as Promise<exampleMethodsResponse>;
};

const StrapiMockSDK: StrapiSDK = {
	exampleMethod,
};

export default StrapiMockSDK;
