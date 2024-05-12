import type { Meta, StoryObj } from "@storybook/react";
import Modal from "@/components/Modal";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "모달의 제목",
    },
    isOpen: {
      control: "boolean",
      description: "모달의 열림 여부",
    },

    onConfirm: {
      action: "clicked",
      description: "모달 확인 버튼 클릭 이벤트",
    },
    onClose: {
      action: "clicked",
      description: "모달 닫기 버튼 클릭 이벤트",
    },
  },
  args: {
    onConfirm: fn(),
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "즐겨찾기에서 제거하시겠습니까?",
    isOpen: true,
  },
};
