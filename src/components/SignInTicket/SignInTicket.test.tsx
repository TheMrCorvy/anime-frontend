import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import SignInTicket from ".";
import { registerTokens } from "@/mocks/mockedResponses";
import { RegisterToken } from "@/types/StrapiSDK";

describe("SignInTicket", () => {
	it("should render properly without props", () => {
		render(<SignInTicket />);

		const ticketComponent = screen.queryByTestId("sign-in-ticket");

		expect(ticketComponent).toBeInTheDocument();
	});

	it("should render properly with props", () => {
		render(
			<SignInTicket
				isRegisterForm
				registerToken={registerTokens["1"].data as RegisterToken}
			/>
		);

		const ticketComponent = screen.queryByTestId("sign-in-ticket");

		expect(ticketComponent).toBeInTheDocument();
	});
});