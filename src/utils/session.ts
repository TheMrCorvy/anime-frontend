import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { MeResponse } from "@/types/StrapiSDK";

export const setSession = (user: MeResponse) => {
	const expires = new Date(Date.now() + 1000000 * 1000);
	const session = { user, expires };

	cookies().set("session", JSON.stringify(session), {
		expires,
		httpOnly: true,
	});
};

export const getSession = (): MeResponse | null => {
	const session = cookies().get("session")?.value;
	if (!session) return null;

	return JSON.parse(session);
};

export const updateSession = (request: NextRequest) => {
	const session = request.cookies.get("session")?.value;
	if (!session) return;

	const parsed = JSON.parse(session);
	parsed.expires = new Date(Date.now() + 1000000 * 1000);

	const res = NextResponse.next();

	res.cookies.set({
		name: "session",
		value: JSON.stringify(parsed),
		httpOnly: true,
		expires: parsed.expires,
	});

	return res;
};

export const removeSession = () => {
	if (isFeatureFlagEnabled(FeatureNames.ENABLE_USERS_LOGIN)) {
		cookies().delete("session");
	}
};
