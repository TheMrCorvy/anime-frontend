import { FC } from "react";

interface Props {
	amountOfItems?: number;
}

const MockedContent: FC<Props> = ({ amountOfItems }) => {
	const arr = Array.from(Array(amountOfItems || 100).keys());

	return (
		<>
			{arr.map((item: number, i: number) => (
				<p
					key={"mocked-content" + i + "-" + item}
					data-testid={"mocked-content-" + i}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Minima eos hic iusto quo porro, reprehenderit eligendi ab
					ipsum dolorum eaque et placeat animi cumque nostrum nobis
					error atque exercitationem beatae.
				</p>
			))}
		</>
	);
};

export default MockedContent;