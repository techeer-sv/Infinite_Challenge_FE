import type { Meta, StoryObj } from "@storybook/react";
import { SearchItem } from "@/components/SearchSuggestion";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/SearchItem",
  component: SearchItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "438px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    boldText: {
      control: "text",
      description: "굵은 글씨",
    },
    regularText: {
      control: "text",
      description: "일반 글씨",
    },
    onClick: {
      action: "clicked",
      description: "검색 결과 클릭 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof SearchItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    boldText: "갑상",
    regularText: "선염",
  },
};
