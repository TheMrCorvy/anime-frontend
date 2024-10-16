import "../../../styles/globals.css";

import { Metadata } from "next";
import { Providers } from "../../providers";
import DirectoriesSidebar from "@/components/layout/DirectoriesSidebar";
import MainContainer from "@/components/layout/MainContainer";
import TopNavigation from "@/components/layout/TopNavigation";
import { navbarItems } from "@/mocks/topNavigationItems";
import { StrapiService } from "@/services/StrapiService";
import { CookiesList, getCookie, JwtCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";

import { Fragment } from "react";

export const metadata: Metadata = {
	title: "Anime Server",
	description: "Servidor de anime privado",
};

interface DirectoryLink {
	label: string;
	url: string;
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const obtainDirectories = async (): Promise<DirectoryLink[]> => {
		"use server";

		const jwt = (await getCookie(CookiesList.JWT)) as JwtCookie | null;

		if (jwt && typeof jwt.jwt === "string") {
			const service = StrapiService();
			const directories = await service.getDirectories({
				jwt: jwt.jwt,
				queryParams: {
					filters: {
						parent_directory: {
							$null: true,
						},
						adult: {
							$eq: false,
						},
					},
				},
			});

			return directories.data.map((dir) => ({
				url: WebRoutes.directory + dir.documentId,
				label: dir.display_name,
			}));
		}

		return [];
	};

	const dir = await obtainDirectories();

	return (
		<Providers>
			<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
				<TopNavigation
					navbarSections={navbarItems}
					position="static"
					className="h-16 bg-slate-800 text-white fixed top-0 right-0"
				/>
				<MainContainer>
					<Fragment>
						<DirectoriesSidebar directories={dir} />
						<section className="felx flex-col w-full gap-6 h-auto">
							{children}
						</section>
					</Fragment>
				</MainContainer>
			</main>
		</Providers>
	);
}
