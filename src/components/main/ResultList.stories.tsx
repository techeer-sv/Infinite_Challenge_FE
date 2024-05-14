import { Meta, StoryObj } from "@storybook/react";
import ResultList from "./ResultList";
import { ResultListType } from "@/src/types/searchResult";
import { fn } from "@storybook/test";
import BookmarkBorder from "../../common/Image/BookmarkBorder";
import Bookmark from "../../common/Image/Bookmark";

const meta = {
  title: "Components/ResultList",
  component: ResultList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "1000px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ResultList>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleResults: ResultListType = {
  from_type: 1,
  url: "http://example.com",
  id: 123,
  ct_id: "NCT123456",
  locations: [{ city: "San Francisco" }],
  phases: ["Phase 1", "Phase 2"],
  minimum_age_display: "18 Years",
  maximum_age_display: "65 Years",
  title: "Study of Something Important",
  start_date: "2021-01-01",
  completion_date: "2023-01-01",
  lead_sponsor_name: "Big Pharma Inc.",
  brief_summary: "This study investigates something important.",
  gender: "All",
  is_sponsor: true,
  survey_id: null,
  is_new: true,
  created_at: "2020-12-31",
};

export const Basic: Story = {
  args: {
    searchResult: sampleResults,
    renderBookmark: ({ onClick, isFavorites }) => {
      return isFavorites ? (
        <Bookmark
          onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
            e.stopPropagation();
            onClick(e);
          }}
          width="16"
          height="16"
          cursor="pointer"
        />
      ) : (
        <BookmarkBorder
          onClick={(e: React.MouseEvent<HTMLOrSVGElement>) => {
            e.stopPropagation();
            onClick(e);
          }}
          width="16"
          height="16"
          fill="#007BE9"
          cursor="pointer"
        />
      );
    },
  },
};
