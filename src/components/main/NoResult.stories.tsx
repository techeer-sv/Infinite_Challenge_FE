import { Meta, StoryObj } from "@storybook/react";
import NoResult from "./NoResult";

const meta = {
  title: "Components/NoResult",
  component: NoResult,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
} as Meta<typeof NoResult>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: "검색결과가 없습니다.",
    description: "검색어를 다시 확인해주세요.",
  },
};
