import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ComponentForTesting from "./index";

describe("ComponentForTesting", () => {
	it("should render properly", () => {
		const { queryByTestId } = render(<ComponentForTesting />);

		const component = queryByTestId("component-for-testing");

		expect(component).toBeInTheDocument();
	});
});
