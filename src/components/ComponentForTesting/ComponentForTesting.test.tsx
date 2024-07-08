import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ComponentForTesting from "./index";

describe("ComponentForTesting", () => {
	it("should render properly", () => {
		render(<ComponentForTesting />);

		const component = screen.queryByTestId("component-for-testing");

		expect(component).toBeInTheDocument();
	});
});
