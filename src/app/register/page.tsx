import { notFound } from "next/navigation";

import MainContainer from "@/components/layout/MainContainer";
import SignInTicket from "@/components/SignInTicket";
import { Page } from "@/types/nextjs";

export default function Register({ searchParams }: Page) {
	const invitationCode = searchParams.invitation;

	if (!invitationCode) {
		notFound();
	}

	return (
		<main className="absolute flex flex-col justify-center min-h-[100%] w-full bg-slate-900 pt-16">
			<MainContainer>
				<>
					<h1 className="absolute top-[-5rem] left-0 w-full text-3xl text-center font-bold">
						Has sido invitado/a a ver anime en FULL-HD en esta
						plataforma exclusiva
					</h1>
					<SignInTicket isRegisterForm />
				</>
			</MainContainer>
		</main>
	);
}