import TopNavigation from "@/components/TopNavigation";
import { navbarItems } from "@/mocks/topNavigationItems";

export default function Home() {
	return (
		<main className="absolute flex justify-center flex-column h-[100%] w-full bg-blue-500">
			<TopNavigation
				navbarSections={navbarItems}
				position="static"
				className="h-16 bg-slate-800 text-white"
			/>
		</main>
	);
}
