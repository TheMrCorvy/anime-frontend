import { redirect } from "next/navigation";

import { CookiesList, getCookie } from "@/utils/cookies";
import { WebRoutes } from "@/utils/routes";

import MainContainer from "@/components/layout/MainContainer";
import SignInTicket from "@/components/SignInTicket";

export default async function Login() {
	const jwt = await getCookie(CookiesList.JWT);
	const user = await getCookie(CookiesList.USER);

	if (jwt || user) {
		return redirect(WebRoutes.home);
	}

	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<MainContainer>
				<>
					<h1 className="absolute top-[-5rem] left-0 w-full text-3xl text-center font-bold">
						Has sido invitado/a a ver anime en FULL-HD en esta
						plataforma exclusiva
					</h1>
					<SignInTicket />
				</>
			</MainContainer>
		</main>
	);
}
