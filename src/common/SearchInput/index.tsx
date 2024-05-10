import { MouseEvent, useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import style from "./index.module.scss";
import smallSearch from "@/assets/images/smallSearch.svg";
import search from "@/assets/images/search.svg";
import Dropdown from "../Dropdown";
import { SearchItemType } from "@/types/searchItemType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const cx = classNames.bind(style);

interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSearchResult: React.Dispatch<React.SetStateAction<SearchItemType[]>>;
}

export default function SearchInput({
  searchValue,
  setSearchValue,
  setSearchResult,
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const submitSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (!searchValue) return;

    setIsClicked(true);
    if (searchValue) {
      const recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
      const updatedSearches = [
        searchValue,
        ...recentSearches.filter((item: string) => item !== searchValue),
      ];
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      setIsFocused(false);
    }
  };

  const { data } = useQuery({
    queryKey: ["searchResult", searchValue],
    queryFn: async () => {
      const encodedSearchValue = encodeURIComponent(searchValue);
      const response = await axios.get(
        `/api/v1/studies/?offset=0&limit=10&conditions=${encodedSearchValue}`
      );

      console.info("calling api");
      return response.data;
    },
    enabled: isClicked === true && searchValue.length > 0,
  });

  useEffect(() => {
    if (data) {
      setSearchResult(data.results);
    }
  }, [data, setSearchResult]);

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
