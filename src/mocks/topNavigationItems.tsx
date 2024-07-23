import { NavbarSection } from "@/components/layout/TopNavigation";
import { Button, Link } from "@nextui-org/react";

export const navbarItems: NavbarSection[] = [
	{
		items: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "Page 2",
				href: "/page-2",
			},
			{
				label: "Page 3",
				href: "/page-3",
			},
		],
		justify: "center",
	},
	{
		items: [
			{
				label: "Sign Up",
				href: "/sign-up",
				children: (
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				),
			},
		],
		className: "flex",
		justify: "end",
	},
];
