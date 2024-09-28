import { notFound, redirect } from "next/navigation";

import { Page } from "@/types/nextjs";
import { StrapiService } from "@/services/StrapiService";
import { CookiesList, getCookie, JwtCookie, UserCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";
import { Directory, RoleTypes } from "@/types/StrapiSDK";

export default async function Directories({ params }: Page) {
	const jwt = (await getCookie(CookiesList.JWT)) as JwtCookie | null;
	const user = (await getCookie(CookiesList.USER)) as UserCookie | null;

	if (!jwt || !user) {
		return redirect(WebRoutes.login);
	}

	const service = StrapiService();
	const directory = await service.getSingleDirectory({
		jwt: jwt.jwt,
		id: parseInt(params.directoryId),
	});

	if ("error" in directory) {
		return notFound();
	}

	const foundDirectory = directory as Directory;

	if (
		foundDirectory.adult &&
		user.role.type !== RoleTypes.ADULT_ANIME_WATCHER
	) {
		return notFound();
	}

	return <p>hola mundo</p>;
}
