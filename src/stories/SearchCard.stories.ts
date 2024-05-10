import type { Meta, StoryObj } from "@storybook/react";
import SearchCard from "@/components/SearchCard";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/SearchCard",
  component: SearchCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "검색 카드의 제목",
    },
    description: {
      control: "text",
      description: "검색 카드의 설명",
    },
    region: {
      control: "text",
      description: "검색 카드의 지역",
    },
    period: {
      control: "text",
      description: "검색 카드의 기간",
    },
    tagList: {
      control: "object",
      description: "검색 카드의 태그 리스트",
    },
    toggleChecked: {
      control: "boolean",
      description: "토글 버튼의 체크 여부",
    },
    onToggleClick: {
      action: "clicked",
      description: "토글 버튼 클릭 이벤트",
    },
  },
  args: {
    onToggleClick: fn(),
  },
} satisfies Meta<typeof SearchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "피디디벨럽먼트피티이엘티디",
    description:
      "이전에 전이성 췌관 선암종에 대한 치료를 받지 않은 시험대상자를 대상으로 SBP-101과 병용하거나 병용하지 않은 냅-파클리탁셀 및 젬시타빈에 대한 무작위배정, 이중눈가림, 위약 대조 임상시험",
    region: "경기도",
    period: "2023년 5월 1일",
    tagList: ["태그1", "태그2", "태그3"],
    toggleChecked: true,
  },
};
