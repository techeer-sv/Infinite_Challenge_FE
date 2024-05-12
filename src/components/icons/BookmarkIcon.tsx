interface IBookmarkIcon {
  fillColor?: string;
  isFilled?: boolean;
}

const BookmarkIcon = ({ isFilled = true, fillColor }: IBookmarkIcon) => {
  const fillStyle = `var(--${fillColor})`;

  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5835 0.75H2.41683C1.4085 0.75 0.592663 1.575 0.592663 2.58333L0.583496 17.25L7.00016 14.5L13.4168 17.25V2.58333C13.4168 1.575 12.5918 0.75 11.5835 0.75Z"
        fill={isFilled ? fillStyle : "none"}
        stroke={fillStyle}
        strokeWidth={"1"}
      />
    </svg>
  );
};

export default BookmarkIcon;
