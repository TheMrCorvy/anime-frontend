import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";

export interface LogDataParams {
	data: unknown;
	ff: FeatureNames;
	title?: string;
}

export type LogData = (params: LogDataParams) => void;

const logData: LogData = ({ data, ff, title }) => {
	if (isFeatureFlagEnabled(ff)) {
		console.log(title, data);
	}
};

export default logData;