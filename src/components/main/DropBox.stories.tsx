import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DropBox from "./DropBox";

const meta = {
  title: "Components/DropBox",
  component: DropBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: { onClick: fn() },
} as Meta<typeof DropBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RecommendedSearch: Story = {
  args: {
    type: "추천검색어",
    searchLists: [
      { name: "Search Term 1", id: 1 },
      { name: "Search Term 2", id: 2 },
      { name: "Search Term 3", id: 3 },
    ],
    selectedIndex: -1,
  },
};

export const RecentSearch: Story = {
  args: {
    type: "최근검색어",
    searchLists: [
      { name: "Search Term 1", id: 1 },
      { name: "Search Term 2", id: 2 },
      { name: "Search Term 3", id: 3 },
    ],
    selectedIndex: -1,
  },
};

// import React, { useState } from "react";
// import { Story } from "@storybook/react";
// import DropBox, { DropBoxProps } from "./DropBox";

// export default {
//   title: "Components/DropBox",
//   component: DropBox,
// };

// const Template: Story<DropBoxProps> = (args) => {
//   const [value, setValue] = useState("");
//   return <DropBox {...args} value={value} setValue={setValue} />;
// };

// export const RecommendedSearch = Template.bind({});
// RecommendedSearch.args = {
//   type: "추천검색어",
//   searchLists: [
//     { name: "Search Term 1", id: 1 },
//     { name: "Search Term 2", id: 2 },
//     { name: "Search Term 3", id: 3 },
//   ],
//   selectedIndex: -1,
// };

// export const RecentSearch = Template.bind({});
// RecentSearch.args = {
//   type: "최근검색어",
//   searchLists: [],
//   selectedIndex: -1,
// };
