import {
	type exampleMethod,
	type exampleMethodsResponse,
	type StrapiSDK,
} from "@/types/StrapiSDK";

const host = process.env.STRAPI_API_HOST as string;

const exampleMethod: exampleMethod = async () => {
	const method = "GET";
	const url = "/api/example";
	const headers = {
		"Content-Type": "application/json",
	};

	return (await fetch(host + url, { method, headers })
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
		})) as Promise<exampleMethodsResponse>;
};

const StrapiSDK: StrapiSDK = {
	exampleMethod,
};

export default StrapiSDK;
