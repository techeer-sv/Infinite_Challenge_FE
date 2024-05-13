import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { fn, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "800px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: { onClick: fn() },
} as Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const Render = (args: typeof meta) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const refetch = () => {};

  return (
    <SearchBar
      {...args}
      value={value}
      setValue={setValue}
      onChange={onChange}
      refetch={refetch}
    />
  );
};

export const Basic: Story = {
  render: () => <Render />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = canvas.getAllByRole("textbox")[0];

    await userEvent.type(input, "갑상선", {
      delay: 100,
    });
    await userEvent.click(input);
  },
};
