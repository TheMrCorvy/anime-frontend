import { FC } from "react";

import { Button, Link } from "@nextui-org/react";
import { getSession, removeSession } from "@/utils/session";

const SessionHandlerComponent: FC = () => {
	const session = getSession();

	if (session) {
		return (
			<Button color="primary" onClick={removeSession} variant="flat">
				Cerrar Sesión
			</Button>
		);
	}

	return (
		<Button as={Link} color="primary" href="/login" variant="flat">
			Login
		</Button>
	);
};

export default SessionHandlerComponent;
