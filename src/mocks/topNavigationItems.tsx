import { NavbarSection } from "@/components/layout/TopNavigation";
import SessionHandlerComponent from "@/components/layout/SessionHandlerComponent";
import SearchInput from "@/components/SearchInput";

export const navbarItems: NavbarSection[] = [
	{
		items: [
			{
				label: "Home",
				href: "/",
			},
		],
		justify: "start",
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

export const navbarItemsTest: NavbarSection[] = [
	{
		items: [
			{
				label: "Home",
				href: "/",
			},
		],
		justify: "start",
	},
	{
		items: [
			{
				label: "Search",
				href: "/search",
			},
		],
		justify: "center",
	},
	{
		items: [
			{
				label: "Login",
				href: "/login",
			},
		],
		justify: "end",
	},
];
