import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked" },
    closeModal: { action: "close" },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: "즐겨찾기에서 제거하시겠습니까?",
    onClick: () => {},
    closeModal: () => {},
  },
};
