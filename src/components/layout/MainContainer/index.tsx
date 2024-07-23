import { FC, ReactElement } from "react";

interface Props {
	children: ReactElement;
}

const MainContainer: FC<Props> = ({ children }) => {
	return (
		<article
			data-testid="main-container"
			className="mx-2 sm:mx-6 md:mx-16 lg:mx-24 mt-12 mb-12 pt-6 px-8 pb-2 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 flex flex-col gap-6"
		>
			{children}
		</article>
	);
};

export default MainContainer;
