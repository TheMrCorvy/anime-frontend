import { FC } from "react";

import { Button, Link } from "@nextui-org/react";
import { getSession, removeSession, setSession } from "@/utils/session";
import { MeResponse } from "@/types/StrapiSDK";

const SessionHandlerComponent: FC = async () => {
	const session = await getSession();

	const handleLogout = async () => {
		"use server";

		removeSession();
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
		<Button as={Link} href="/login" color="primary" variant="flat">
			Login
		</Button>
	);
};

export default SessionHandlerComponent;
