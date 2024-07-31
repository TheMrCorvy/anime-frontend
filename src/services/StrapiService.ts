import featureFlagService, { FeatureFlags } from "./featureFlagService";
import StrapiMockSDK from "@/lib/StrapiMockSDK";
import StrapiSDK from "@/lib/StrapiSDK";
import { type StrapiSDK as IStrapiSDK } from "@/types/StrapiSDK";

export const StrapiService = (): IStrapiSDK => {
	if (
		process.env.NODE_ENV === "test" ||
		!featureFlagService.isEbabled(FeatureFlags.CONSUME_PRODUCTION_DATA)
	) {
		return StrapiMockSDK;
	} else {
		if (!process.env.STRAPI_API_HOST) {
			throw new Error("API HOST NOT FOUND");
		}
		return StrapiSDK;
	}
};
