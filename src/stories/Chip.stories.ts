import type { Meta, StoryObj } from "@storybook/react";
import Chip from "../components/Chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      desciption: "Chip 컴포넌트에 표현될 라벨",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Chip",
  },
};
