import BookmarkIcon from "@/components/icons/BookmarkIcon";

interface IToggleButton {
  checked: boolean;
  onClick?: () => void;
}

const ToggleButton = ({ checked, onClick }: IToggleButton) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={checked}
      className="p-2 bg-white border-none cursor-pointer focus:outline-none"
    >
      <BookmarkIcon fillColor={checked ? "none" : "color-primary"} />
    </button>
  );
};

export default ToggleButton;
