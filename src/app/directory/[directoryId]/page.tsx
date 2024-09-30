import { notFound, redirect } from "next/navigation";

import { Page } from "@/types/nextjs";
import { StrapiService } from "@/services/StrapiService";
import { CookiesList, getCookie, JwtCookie, UserCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";
import { Directory, RoleTypes } from "@/types/StrapiSDK";

import {
	Card,
	CardHeader,
	Divider,
	Tooltip,
	Link as UiLink,
} from "@nextui-org/react";
import WarningLine from "@/components/icons/WarningLine";
import Folder from "@/components/icons/Folder";
import Video from "@/components/icons/Video";

import Link from "next/link";
import DirectoryListItem from "@/components/layout/DirectoryListItem";

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
		queryParams: {
			populate: ["anime_episodes", "parent_directory", "sub_directories"],
		},
	});

	if ("error" in directory) {
		console.error(directory);
		return notFound();
	}

	const foundDirectory = directory as Directory;

	if (
		foundDirectory.adult &&
		user.role.type !== RoleTypes.ADULT_ANIME_WATCHER
	) {
		return notFound();
	}

	return (
		<article className="flex flex-col">
			<section
				className={`flex flex-row w-full mb-5 ${foundDirectory.parent_directory?.data ? "justify-between" : "relative"}`}
			>
				<UiLink
					href={WebRoutes.home}
					size="lg"
					color="foreground"
					underline="always"
					showAnchorIcon
				>
					Volver al Inicio
				</UiLink>
				<h1
					className={`text-xl font-medium capitalize ${foundDirectory.parent_directory?.data ? "" : "absolute top-0 right-1/2"}`}
				>
					{foundDirectory.display_name}
				</h1>
				{foundDirectory.parent_directory &&
					foundDirectory.parent_directory.data && (
						<UiLink
							href={
								WebRoutes.directory +
								foundDirectory.parent_directory.data?.id
							}
							size="lg"
							color="foreground"
							underline="always"
							showAnchorIcon
						>
							Volver a la Carpeta Anterior
						</UiLink>
					)}
			</section>
			<Divider className="mb-8" />
			<section>
				{foundDirectory.sub_directories?.data.map((subDir, i) => (
					<DirectoryListItem
						key={"sub-directory-" + subDir.id + "-" + i}
						directoryId={subDir.id}
						displayName={subDir.attributes.display_name}
					/>
				))}
			</section>
			<section className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
				{foundDirectory.anime_episodes &&
					foundDirectory.anime_episodes.data.map((ep, i) => (
						<Link
							href={WebRoutes.animeEpisode + ep.id}
							key={"anime-episode-" + ep.id + "-" + i}
						>
							<Card
								className="py-4 bg-cyan-800 hover:scale-105 w-full"
								isPressable
							>
								<CardHeader className="py-2 px-4 flex-row items-start">
									<h4 className="font-bold text-large">
										{ep.attributes.display_name}
									</h4>
									<Video
										size={24}
										color="currentColor"
										className="ml-7 mt-1"
									/>
								</CardHeader>
							</Card>
						</Link>
					))}
			</section>
		</article>
	);
}
