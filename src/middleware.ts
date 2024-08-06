import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";
import { CookiesList } from "@/utils/cookies";
import { NextRequest, NextResponse } from "next/server";

export const config = {
	matcher: "/",
};

export async function middleware(request: NextRequest) {
	const session = request.cookies.get(CookiesList.USER);
	const token = request.cookies.get(CookiesList.JWT);

	const ff = isFeatureFlagEnabled(FeatureNames.ENABLE_USERS_LOGIN);
	if (!ff && (!session || !token)) {
		return NextResponse.redirect(
			new URL("/api/set-mock-session", request.url)
		);
	}

	if (!session || !token) {
		return NextResponse.redirect(new URL("/403", request.url));
	}

	return NextResponse.next();
}
