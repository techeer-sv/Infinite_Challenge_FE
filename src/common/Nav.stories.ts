// Nav.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";
import { fn } from "@storybook/test";

const meta = {
  title: "Common/Nav",
  component: Nav,
  parameters: {
    layout: "centered",
  },
  tages: ["autodocs"],
  // decorators: [
  //   (Story) => (
  //     <div
  //       style={{
  //         position: "absolute",
  //         top: 0,
  //         left: 0,
  //         width: "100%",
  //       }}
  //     >
  //       <Story />
  //     </div>
  //   ),
  // ],
  args: { onClick: fn() },
} as Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
