import { MouseEvent, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import smallSearch from "@/assets/images/smallSearch.svg";
import search from "@/assets/images/search.svg";
import Dropdown from "../Dropdown";

const cx = classNames.bind(style);

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const submitSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!searchValue) return;
    if (searchValue) {
      const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      const updatedSearches = [
        searchValue,
        ...recentSearches.filter((item: string) => item !== searchValue),
      ];
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));

      setSearchValue("");
      setIsFocused(false);
    }
  };

  return (
    <div className={cx("search-container", { focused: isFocused })} onClick={focusInput}>
      {!searchValue && !isFocused && (
        <div className={cx("icon-box")}>
          <img className={cx("small-icon")} src={smallSearch} alt="smallSearch" />
        </div>
      )}

      <input
        className={cx("input-container")}
        ref={inputRef}
        type="search"
        name="search-box"
        placeholder="질환명을 입력해주세요."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className={cx("search-button")} onClick={(e) => submitSearch(e)}>
        <img className={cx("search-icon")} src={search} alt="search icon" />
      </button>

      {isFocused && <Dropdown searchValue={searchValue} />}
    </div>
  );
}
