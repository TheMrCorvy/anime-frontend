import { mockMeResponse, mockUserToken } from "@/mocks/mockedResponses";
import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";
import { CookiesList, setCookie } from "@/utils/cookies";
import { NextResponse } from "next/server";

export async function GET() {
	const response = NextResponse.redirect("http://localhost:3000/");

	if (isFeatureFlagEnabled(FeatureNames.ENABLE_USERS_LOGIN)) {
		return response;
	}

	setCookie(CookiesList.USER, mockMeResponse);
	setCookie(CookiesList.JWT, { jwt: mockUserToken });

	return response;
}
