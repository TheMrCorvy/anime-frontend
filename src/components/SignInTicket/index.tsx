import { FC } from "react";

import SignInForm from "./SignInForm";
import Invitation from "./Invitation";
import QrCode from "./QrCode";
import { RegisterToken } from "@/types/StrapiSDK";

interface Props {
	isRegisterForm?: boolean;
	registerToken?: RegisterToken;
}

const SignInTicket: FC<Props> = ({ isRegisterForm, registerToken }) => {
	return (
		<section
			data-testid="sign-in-ticket"
			className="bg-pink-400 shadow-xl shadow-slate-800/90 h-[20rem] w-full rounded-3xl overflow-hidden flex flex-row justify-start relative padding-5"
		>
			<Invitation
				isRegisterForm={isRegisterForm}
				invitationNumber={registerToken?.id}
				createdAt={registerToken?.attributes.createdAt}
				userName={registerToken?.attributes.user}
			/>

			<QrCode
				isRegisterForm={isRegisterForm || false}
				value={
					isRegisterForm && registerToken
						? registerToken.attributes.token
						: "Invitation"
				}
			/>

			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl top-[-1.5rem] left-[48.4%]"></div>
			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl top-[-1.5rem] left-[65%]"></div>
			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl bottom-[-1.5rem] left-[48.4%]"></div>
			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl bottom-[-1.5rem] left-[65%]"></div>

			<SignInForm
				isRegisterForm={isRegisterForm || false}
				tokenId={registerToken?.id}
			/>

			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl bottom-[-1.5rem] left-[65%]"></div>
			<div className="bg-slate-800 absolute h-12 w-12 rounded-3xl top-[-1.5rem] left-[65%]"></div>
		</section>
	);
};

export default SignInTicket;
