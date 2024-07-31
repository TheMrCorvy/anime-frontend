export enum FeatureFlags {
	CONSUME_PRODUCTION_DATA,
}

export interface FeatureFlag {
	enabled: boolean;
	feature: FeatureFlags;
}

const getFeatureFlags = (): FeatureFlag[] | null => {
	const featureFlagsString = process.env.FEATUREFLAGS;

	if (!featureFlagsString) {
		return null;
	}

	return JSON.parse(featureFlagsString);
};

const isEbabled = (ff: FeatureFlags): boolean => {
	const featureFlagList = getFeatureFlags();

	if (!featureFlagList || featureFlagList.length === 0) {
		return false;
	}

	const featureFlag = featureFlagList.find((f) => f.feature === ff);

	if (!featureFlag) return false;

	return featureFlag.enabled;
};

const featureFlagService = {
	isEbabled,
};

export default featureFlagService;
