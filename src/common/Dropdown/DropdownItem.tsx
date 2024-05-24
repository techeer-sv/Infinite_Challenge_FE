import classNames from "classnames/bind";
import style from "./index.module.scss";
import smallSearch from "@/assets/images/smallSearch.svg";

const cx = classNames.bind(style);

interface DropdownItemProps {
  searchValue?: string;
  search: string;
  onClick?: () => void;
}

export default function DropdownItem({ searchValue, search, onClick }: DropdownItemProps) {
  return (
    <div className={cx("recent-item")} onClick={onClick}>
      <img className={cx("small-icon")} src={smallSearch} alt="smallSearch" />
      {searchValue && searchValue?.length > 0 ? (
        <p className={cx("search-text")}>
          <span className={cx("bold-text")}>{searchValue}</span>
          {search.replace(searchValue, "")}
        </p>
      ) : (
        <p className={cx("search-text")}>{search}</p>
      )}
    </div>
  );
}
