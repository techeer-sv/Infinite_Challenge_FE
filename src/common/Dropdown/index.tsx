import classNames from "classnames/bind";
import style from "./index.module.scss";
import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";

const cx = classNames.bind(style);

interface DropdownProps {
  searchValue: string;
}

export default function Dropdown({ searchValue }: DropdownProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [recommendedSearches, setRecommendedSearches] = useState<string[]>([]);

  useEffect(() => {
    const searches = localStorage.getItem("recentSearches");

    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);

  return (
    <div className={cx("container")}>
      {searchValue.length > 0 ? (
        <>
          <DropdownItem searchValue={searchValue} search={searchValue} />
          <div className={cx("separator-box")}>
            <p className={cx("separator")}>추천 검색어</p>
          </div>
          {recommendedSearches?.length > 0 ? (
            recommendedSearches.map((search, index) => (
              <DropdownItem key={index} searchValue={searchValue} search={search} />
            ))
          ) : (
            <p className={cx("light-text")}>추천 검색어가 없습니다.</p>
          )}
        </>
      ) : (
        <>
          <p className={cx("separator")}>최근 검색어</p>
          {recentSearches?.length > 0 ? (
            recentSearches.map((search, index) => <DropdownItem key={index} search={search} />)
          ) : (
            <p className={cx("light-text")}>최근 검색어가 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
}
