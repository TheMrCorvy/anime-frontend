import { FC } from "react";
import { Input, Button } from "@nextui-org/react";

interface Props {
	isRegisterForm: boolean;
	tokenId?: number;
}

const SignInForm: FC<Props> = ({ isRegisterForm, tokenId }) => {
	const inputs = () => {
		if (isRegisterForm) {
			return (
				<>
					<Input
						isRequired
						type="text"
						label="Nombre de usuario"
						className="max-w-xs"
						color="danger"
						name="identifier"
					/>
					<Input
						isRequired
						type="email"
						label="Email"
						className="max-w-xs"
						color="danger"
						name="identifier"
						data-testid="sign-in-email"
					/>
					<Input
						isRequired
						type="password"
						label="Contraseña"
						className="max-w-xs"
						color="danger"
						name="password"
					/>
				</>
			);
		}

		return (
			<>
				<Input
					isRequired
					type="email"
					label="Email o Usuario"
					className="max-w-xs"
					color="danger"
					name="identifier"
					data-testid="sign-in-identifier"
				/>
				<Input
					isRequired
					type="password"
					label="Contraseña"
					className="max-w-xs"
					color="danger"
					name="password"
				/>
			</>
		);
	};

	return (
		<>
			<div
				data-testid="sign-in-form"
				className="h-full w-4/12 border-dashed border-white border-l-3"
			>
				<form
					action="/"
					className="flex flex-col h-full gap-6 p-6 justify-center items-center text-center content-center"
				>
					{inputs()}
					<Button color="danger" type="submit">
						Ingresar
					</Button>
				</form>
			</div>
		</>
	);
};

export default SignInForm;
