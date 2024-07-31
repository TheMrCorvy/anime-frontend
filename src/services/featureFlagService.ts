export enum FeatureNames {
	CONSUME_STRAPI_DATA,
	CONSUME_NAS_FILES,
	ENABLE_USERS_LOGIN,
	ENABLE_USERS_REGISTER,
}

export interface FeatureFlag {
	enabled: boolean;
	feature: FeatureNames;
}

const getFeatureFlags = (): FeatureFlag[] | null => {
	const featureFlagsString = process.env.FEATUREFLAGS;

	if (!featureFlagsString) {
		return null;
	}

	return JSON.parse(featureFlagsString);
};

export const isFeatureFlagEnabled = (ff: FeatureNames): boolean => {
	const featureFlagList = getFeatureFlags();

	if (!featureFlagList || featureFlagList.length === 0) {
		return false;
	}

	const featureFlag = featureFlagList.find((f) => f.feature === ff);

	if (!featureFlag) return false;

	return featureFlag.enabled;
};
