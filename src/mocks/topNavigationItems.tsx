import { NavbarSection } from "@/components/layout/TopNavigation";
import SessionHandlerComponent from "@/components/layout/SessionHandlerComponent";
import SearchInput from "@/components/SearchInput";

export const navbarItems: NavbarSection[] = [
	{
		items: [
			{
				label: "Buscar",
				href: "/",
				children: <SearchInput />,
			},
		],
		className: "flex",
		justify: "end",
	},
	{
		items: [
			{
				label: "Home",
				href: "/",
			},
		],
		justify: "center",
	},
	{
		items: [
			{
				label: "Sign Up",
				href: "/sign-up",
				children: <SessionHandlerComponent />,
			},
		],
		className: "flex",
		justify: "end",
	},
];
