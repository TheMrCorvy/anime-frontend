"use client";
import { FC, Fragment, ReactElement, useState } from "react";

import {
	Link,
	Navbar,
	NavbarContent,
	NavbarItem,
	NavbarMenuItem,
	NavbarMenuToggle,
	NavbarMenu,
} from "@nextui-org/react";

export interface NavbarItem {
	label: string;
	href: string;
	Icon?: string;
	className?: string;
	children?: ReactElement;
}

export interface NavbarSection {
	items: NavbarItem[];
	className?: string;
	justify?: "start" | "center" | "end";
}

export interface NavigationProps {
	navbarSections: NavbarSection[];
	className?: string;
	position?: "static" | "sticky" | undefined;
}

const TopNavigation: FC<NavigationProps> = ({
	navbarSections,
	className,
	position,
}) => {
	// To do:
	// Check the route to see what link should be selected
	const isLinkActive = (i: number) => {
		return i === 0;
	};

	const [isOpen, setIsOpen] = useState(false);

	return (
		<Navbar
			data-testid="top-navigation-component"
			position={position}
			className={className}
			onMenuOpenChange={setIsOpen}
		>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isOpen ? "Close menu" : "Open menu"}
					className="sm:hidden"
				/>
			</NavbarContent>

			{navbarSections.map((section, i) => (
				<NavbarContent
					key={`navbar-section-${i}`}
					className={"gap-4 " + section.className}
					justify={section.justify}
				>
					{section.items.map((item, index) => (
						<Fragment
							key={`navbar-item-${item.label}-${i}-${index}`}
						>
							{item.children ? (
								<>{item.children}</>
							) : (
								<NavbarItem isActive={isLinkActive(index)}>
									<Link
										className={
											item.className || "text-white"
										}
										href={item.href}
									>
										{item.label}
									</Link>
								</NavbarItem>
							)}
						</Fragment>
					))}
				</NavbarContent>
			))}

			<NavbarMenu>
				{navbarSections.map((section, index) =>
					section.items.map((item, i) => (
						<NavbarMenuItem
							key={`navbar-item-${item.label}-mobile-${index}-${i}`}
						>
							<Link
								color={
									isLinkActive(index)
										? "primary"
										: "secondary"
								}
								className={item.className || "w-full"}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))
				)}
			</NavbarMenu>
		</Navbar>
	);
};

export default TopNavigation;
