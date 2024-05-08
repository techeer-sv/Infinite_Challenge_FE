import classNames from "classnames/bind";
import style from "./index.module.scss";
import search from "@/assets/images/search.svg";
import { useRef, useState } from "react";
import Dropdown from "../Dropdown";

const cx = classNames.bind(style);

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={cx("search-container", { focused: isFocused })} onClick={focusInput}>
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
      <button className={cx("search-button")}>
        <img src={search} alt="search icon" />
      </button>

      {isFocused && <Dropdown />}
    </div>
  );
}
