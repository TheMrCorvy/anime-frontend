import DirectoriesSidebar from "@/components/layout/DirectoriesSidebar";
import MainContainer from "@/components/layout/MainContainer";
import TopNavigation from "@/components/layout/TopNavigation";
import MockedContent from "@/mocks/contentForContainer";
import { navbarItems } from "@/mocks/topNavigationItems";
import { StrapiService } from "@/services/StrapiService";
import { CookiesList, getCookie, JwtCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";

interface DirectoryLink {
	label: string;
	url: string;
}

export default async function Home() {
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

			return directories.directories.map((dir) => ({
				url: WebRoutes.directory + dir.id,
				label: dir.display_name,
			}));
		}

		return [];
	};

	const dir = await obtainDirectories();

	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<TopNavigation
				navbarSections={navbarItems}
				position="static"
				className="h-16 bg-slate-800 text-white fixed top-0 right-0"
			/>
			<MainContainer>
				<>
					<DirectoriesSidebar directories={dir} />
					<section className="felx flex-col w-full gap-6 h-auto">
						<MockedContent amountOfItems={120} />
					</section>
				</>
			</MainContainer>
		</main>
	);
}
