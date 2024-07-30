import { FC } from "react";

import { Button, Link } from "@nextui-org/react";

const SessionHandlerComponent: FC = () => {
	const session = true;

	if (session) {
		return (
			<Button as={Link} color="primary" href="#" variant="flat">
				Cerrar Sesión
			</Button>
		);
	}

	return (
		<Button as={Link} color="primary" href="#" variant="flat">
			Login
		</Button>
	);
};

export default SessionHandlerComponent;
