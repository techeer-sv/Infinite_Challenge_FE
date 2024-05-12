import type { Meta, StoryObj } from "@storybook/react";
import { RecentSearch } from "@/domain/KoreaClinicalInfo/components/SearchSuggestion";
import { fn } from "@storybook/test";

const meta = {
  title: "KoreaClinicalInfo/SearchSuggestion/RecentSearch",
  component: RecentSearch,
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
    recentKeyWords: {
      control: "object",
      description: "최근 검색어 목록",
    },
    onItemClick: {
      action: "clicked",
      description: "최근 검색어 클릭 이벤트",
    },
  },
  args: {
    onItemClick: fn(),
  },
} satisfies Meta<typeof RecentSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exist: Story = {
  args: {
    recentKeyWords: [
      {
        name: "갑상선암",
        id: 4373,
      },
      {
        name: "갑상선염",
        id: 4376,
      },
    ],
  },
};

export const None: Story = {
  args: {
    recentKeyWords: [],
  },
};
