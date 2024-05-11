import type { Meta, StoryObj } from "@storybook/react";
import { RecommendSearch } from "@/components/SearchSuggestion";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/RecommendSearch",
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
    recommendKeyWords: ["갑상선암", "갑상선염"],
  },
};

export const None: Story = {
  args: {
    searchKeywords: "갑상",
    recommendKeyWords: [],
  },
};
