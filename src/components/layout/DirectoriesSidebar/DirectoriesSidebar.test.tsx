import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import DirectoriesSidebar from "./index";
import { mockedDirectories } from "@/mocks/sidebarMocks";

describe("DirectoriesSidebar", () => {
	it("should render properly", () => {
		render(<DirectoriesSidebar directories={mockedDirectories} />);

		const container = screen.queryByTestId("directories-sidebar");

		expect(container).toBeInTheDocument();
	});

	it("should render inner components", () => {
		render(<DirectoriesSidebar directories={mockedDirectories} />);

		const firstItem = screen.getByText(mockedDirectories[0].label);
		const lastItem = screen.getByText(
			mockedDirectories[mockedDirectories.length - 1].label
		);

		expect(firstItem).toBeInTheDocument();
		expect(lastItem).toBeInTheDocument();
	});
});
