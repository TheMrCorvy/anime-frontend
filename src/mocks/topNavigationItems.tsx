import { NavbarSection } from "@/components/layout/TopNavigation";
import SessionHandlerComponent from "@/components/layout/SessionHandlerComponent";
import SearchInput from "@/components/SearchInput";

export const navbarItems: NavbarSection[] = [
	{
		items: [
			{
				label: "Home 1",
				href: "/",
			},
		],
		justify: "center",
	},
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
				label: "Home 2",
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
	{
		items: [
			{
				label: "Home 3",
				href: "/",
			},
		],
		justify: "center",
	},
];
