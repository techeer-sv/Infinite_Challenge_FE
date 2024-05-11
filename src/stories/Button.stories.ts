import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "버튼 내용",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트",
    },
    variant: {
      control: "radio",
      options: ["primary", "dismiss"],
      description: "버튼 스타일",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Dismiss: Story = {
  args: {
    children: "Button",
    variant: "dismiss",
  },
};
