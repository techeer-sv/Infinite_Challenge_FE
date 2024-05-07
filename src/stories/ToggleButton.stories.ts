import type { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "../components/ToggleButton";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      desciption: "ToggleButton 상태",
    },
    onClick: {
      action: "clicked",
      description: "ToggleButton 상태 변경 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: true,
  },
};
