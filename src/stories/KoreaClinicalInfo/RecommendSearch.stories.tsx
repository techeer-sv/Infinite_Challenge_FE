import type { Meta, StoryObj } from "@storybook/react";
import { RecommendSearch } from "@/domain/KoreaClinicalInfo/components/SearchSuggestion";
import { fn } from "@storybook/test";

const meta = {
  title: "KoreaClinicalInfo/SearchSuggestion/RecommendSearch",
  component: RecommendSearch,
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
    searchKeywords: {
      control: "text",
      description: "추천 검색어 목록",
    },
    recommendKeyWords: {
      control: "object",
      description: "추천 검색어 목록",
    },
    onItemClick: {
      action: "clicked",
      description: "추천 검색어 클릭 이벤트",
    },
  },
  args: {
    onItemClick: fn(),
  },
} satisfies Meta<typeof RecommendSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Exist: Story = {
  args: {
    searchKeywords: "갑상",
    recommendKeyWords: [
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
    searchKeywords: "갑상",
    recommendKeyWords: [],
  },
};
