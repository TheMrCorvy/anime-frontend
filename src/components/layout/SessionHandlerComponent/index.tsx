import { FC } from "react";

import { Button, Link } from "@nextui-org/react";
import {
	CookiesList,
	getCookie,
	removeCookie,
	setCookie,
} from "@/utils/cookies";
import { mockMeResponse } from "@/mocks/mockedResponses";

import crypto from "crypto";

const SessionHandlerComponent: FC = async () => {
	const session = await getCookie(CookiesList.USER);

	const handleLogout = async () => {
		"use server";

		// console.log(getCookie(CookiesList.USER));

		removeCookie(CookiesList.USER);
	};

	const handleLogin = async () => {
		"use server";
		console.log(crypto.randomBytes(32).toString("hex"));
		setCookie(CookiesList.USER, mockMeResponse);
	};

	if (session) {
		return (
			<form action={handleLogout}>
				<Button color="primary" type="submit" variant="flat">
					Cerrar Sesión
				</Button>
			</form>
		);
	}

	return (
		<form action={handleLogin}>
			<Button
				// as={Link}
				// href="/login"
				color="primary"
				variant="flat"
				type="submit"
			>
				Login
			</Button>
		</form>
	);
};

export default SessionHandlerComponent;
