import MainContainer from "@/components/layout/MainContainer";
import TopNavigation from "@/components/layout/TopNavigation";
import MockedContent from "@/mocks/contentForContainer";
import { navbarItems } from "@/mocks/topNavigationItems";

export default function Home() {
	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<TopNavigation
				navbarSections={navbarItems}
				position="static"
				className="h-16 bg-slate-800 text-white fixed top-0 right-0"
			/>
			<MainContainer>
				<MockedContent amountOfItems={12} />
			</MainContainer>
		</main>
	);
}
