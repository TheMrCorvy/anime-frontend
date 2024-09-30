import { IconParams } from "@/types/iconsParams";
import { FC } from "react";

const Folder: FC<IconParams> = ({ color, size, className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill={color || "currentColor"}
			height={size || 16}
			width={size || 16}
			className={className}
		>
			<path d="M3 3C2.44772 3 2 3.44772 2 4V7H9.58579L12 4.58579L10.4142 3H3ZM14.4142 5L10.4142 9H2V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V6C22 5.44772 21.5523 5 21 5H14.4142Z"></path>
		</svg>
	);
};

export default Folder;