import type { QueryParams, PaginationQuery } from "@/types/StrapiSDK";

const buildQueryParams = (params: QueryParams): string => {
	const queryString = new URLSearchParams();

	Object.keys(params).forEach((key) => {
		const value = params[key as keyof QueryParams];

		if (value === undefined) {
			return;
		}

		// If the param in cuestion is pagination
		if (typeof value === "object" && !Array.isArray(value)) {
			return Object.keys(value).forEach((nestedKey) => {
				queryString.append(
					`${key}[${nestedKey}]`,
					value[nestedKey as keyof PaginationQuery]
				);
			});
		}

		// If the case is populate or other simillar
		if (Array.isArray(value)) {
			return value.forEach((item) => {
				queryString.append(key, item);
			});
		}

		queryString.append(key, value);
	});

	return queryString.toString();
};

export default buildQueryParams;
