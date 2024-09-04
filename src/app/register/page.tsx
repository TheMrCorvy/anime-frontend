import { notFound, redirect } from "next/navigation";

import MainContainer from "@/components/layout/MainContainer";
import SignInTicket from "@/components/SignInTicket";
import { Page } from "@/types/nextjs";
import { StrapiService } from "@/services/StrapiService";
import { CookiesList, getCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";
import {
	FeatureNames,
	isFeatureFlagEnabled,
} from "@/services/featureFlagService";

export default async function Register({ searchParams }: Page) {
	if (!isFeatureFlagEnabled(FeatureNames.ENABLE_USERS_REGISTER)) {
		return notFound();
	}

	const jwt = await getCookie(CookiesList.JWT);
	const user = await getCookie(CookiesList.USER);

	if (jwt || user) {
		return redirect(WebRoutes.home);
	}

	const invitationCode = searchParams.invitation;

	if (!invitationCode) {
		return notFound();
	}

	const service = StrapiService();
	const token = await service.validateRegisterToken({
		tokenId: parseInt(invitationCode[0]),
	});

	if (token.data === null || token.data.attributes.used) {
		return notFound();
	}

	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<MainContainer>
				<>
					<h1 className="absolute top-[-5rem] left-0 w-full text-3xl text-center font-bold">
						Has sido invitado/a a ver anime en FULL-HD en esta
						plataforma exclusiva
					</h1>
					<SignInTicket
						isRegisterForm
						registerToken={{ ...token.data }}
					/>
				</>
			</MainContainer>
		</main>
	);
}
