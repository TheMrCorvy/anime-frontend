import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopNavigation from "./index";
import { navbarItems } from "@/mocks/topNavigationItems";

describe("TopNavigation", () => {
	it("should render properly", () => {
		render(<TopNavigation navbarSections={navbarItems} />);

		const navbar = screen.queryByTestId("top-navigation-component");

		expect(navbar).toBeInTheDocument();
	});

	it("should render all the links properly", () => {
		render(<TopNavigation navbarSections={navbarItems} />);

		const firstLink = screen.getByText(navbarItems[0].items[0].label);
		expect(firstLink).toBeInTheDocument();

		const lastItemsArr = navbarItems[navbarItems.length - 1].items;
		const lastItem = lastItemsArr[lastItemsArr.length - 1];
		const lastLink = screen.getByText(lastItem.label);
		expect(lastLink).toBeInTheDocument();
	});
});
