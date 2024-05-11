import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "@/components/SearchBar";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "text",
      description: "검색어 입력창의 값",
    },
    placeholder: {
      control: "text",
      description: "검색어 입력창의 placeholder",
    },
    onChange: {
      action: "changed",
      description: "검색어 입력 이벤트",
    },
    onSubmit: {
      action: "submitted",
      description: "검색어 제출 이벤트",
    },
  },
  args: {
    onChange: fn(),
    onSubmit: fn(),
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "검색어",
    placeholder: "검색어를 입력해주세요",
  },
};
