import type { Meta, StoryObj } from "@storybook/react";
import MainContainer from ".";
import MockedContent from "@/mocks/contentForContainer";

const meta = {
	title: "Layout/MainContainer",
	component: MainContainer,
	parameters: {
		layout: "fullscreen",
		argTypes: {
			backgroundColor: {
				control: "#0f172a",
			},
		},
	},
} satisfies Meta<typeof MainContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <MockedContent />,
	},
};
