import { FC, Fragment } from "react";

import { Divider } from "@nextui-org/react";
import MaxCharLink from "@/components/MaxCharLink";

interface DirectoryLink {
	label: string;
	url: string;
}

interface Props {
	directories: DirectoryLink[];
}

const DirectoriesSidebar: FC<Props> = ({ directories }) => {
	return (
		<aside className="w-[12rem] relative" data-testid="directories-sidebar">
			<ul className="rounded-md h-auto text-center bg-blue-500 p-2 sticky top-20 right-0">
				{directories.map((dir, i) => (
					<Fragment key={`sidebar-${dir.url}-${i}`}>
						<MaxCharLink
							url={dir.url}
							label={dir.label}
							popoverPlacement="right"
							maxLength={20}
							className="text-white text-sm capitalize"
						/>
						{i !== directories.length - 1 && (
							<Divider className="my-1" />
						)}
					</Fragment>
				))}
			</ul>
		</aside>
	);
};

export default DirectoriesSidebar;
