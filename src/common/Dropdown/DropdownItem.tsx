import classNames from "classnames/bind";
import style from "./index.module.scss";
import smallSearch from "@/assets/images/smallSearch.svg";

const cx = classNames.bind(style);

interface DropdownItemProps {
  searchValue?: string;
  search: string;
}

export default function DropdownItem({ searchValue, search }: DropdownItemProps) {
  const highlightText = (text: string, highlight: string) => {
    if (highlight.length === 0) return <p className={cx("search-text")}>{text}</p>;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
      <p className={cx("search-text")}>
        {parts.map((part, index) =>
          regex.test(part) ? (
            <span key={index} className={cx("bold-text")}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </p>
    );
  };

  return (
    <div className={cx("recent-item")}>
      <img className={cx("small-icon")} src={smallSearch} alt="smallSearch" />
      {highlightText(search, searchValue || "")}
    </div>
  );
}
