import MainContainer from "@/components/layout/MainContainer";

export default function Login() {
	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<MainContainer>
				<>
					<h1 className="absolute top-[-5rem] left-0 w-full text-3xl text-center font-bold">
						Has sido invitado/a a ver anime en FULL-HD en esta
						plataforma exclusiva
					</h1>
					<section className="bg-red-500 shadow-xl shadow-slate-800/90 h-[20rem] w-full rounded-3xl overflow-hidden flex flex-row justify-start relative padding-5">
						<div className="h-full w-6/12 border-dashed border-white border-r-3"></div>
						<div className="h-full w-2/12 border-dashed border-white border-x-3"></div>
						<div className="h-full w-4/12 border-dashed border-white border-l-3"></div>
						<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl top-[-1.5rem] left-[48.4%]"></div>
						<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl top-[-1.5rem] left-[65%]"></div>
						<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl bottom-[-1.5rem] left-[48.4%]"></div>
						<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl bottom-[-1.5rem] left-[65%]"></div>
					</section>
				</>
			</MainContainer>
		</main>
	);
}
