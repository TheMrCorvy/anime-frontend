import { mockMeResponse } from "@/mocks/mockedResponses";
import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";
import { RoleTypes } from "@/types/StrapiSDK";
import { getSession, setSession, updateSession } from "@/utils/session";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
	if (!isFeatureFlagEnabled(FeatureNames.ENABLE_USERS_LOGIN)) {
		return await setSession(mockMeResponse);
	}

	const session = getSession();

	if (
		!session ||
		!session.role ||
		(session.role.type !== RoleTypes.ADULT_ANIME_WATCHER &&
			session.role.type !== RoleTypes.ANIME_WATCHER)
	) {
		return NextResponse.redirect(new URL("/403", request.url));
	}

	return await updateSession(request);
}
