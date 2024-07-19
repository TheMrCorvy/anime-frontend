import TopNavigation from "@/components/TopNavigation";
import { navbarItems } from "@/mocks/topNavigationItems";

export default function Home() {
	const arr = Array.from(Array(100).keys());
	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<TopNavigation
				navbarSections={navbarItems}
				position="static"
				className="h-16 bg-slate-800 text-white fixed top-0 right-0"
			/>
			<article className="mx-2 sm:mx-6 md:mx-16 lg:mx-24 mt-12 mb-12 pt-6 px-8 pb-2 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col gap-6">
				{arr.map((item: number, i: number) => (
					<p key={i}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Minima eos hic iusto quo porro, reprehenderit
						eligendi ab ipsum dolorum eaque et placeat animi cumque
						nostrum nobis error atque exercitationem beatae.
					</p>
				))}
			</article>
		</main>
	);
}
