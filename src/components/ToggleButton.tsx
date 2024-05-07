import BookmarkIcon from "./icons/BookmarkIcon";

interface ToggleButtonProps {
  checked: boolean;
  onClick?: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ checked, onClick }) => {
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
