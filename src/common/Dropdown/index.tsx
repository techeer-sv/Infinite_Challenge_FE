import classNames from "classnames/bind";
import style from "./index.module.scss";
import { useEffect, useState } from "react";
import DropdownItem from "./DropdownItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const cx = classNames.bind(style);

interface DropdownProps {
  searchValue: string;
}

type RecommendedSearchType = {
  id: number;
  name: string;
};

export default function Dropdown({ searchValue }: DropdownProps) {
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [recommendedSearches, setRecommendedSearches] = useState<RecommendedSearchType[]>([]);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>(searchValue);

  useEffect(() => {
    const searches = localStorage.getItem("recentSearches");

    if (searches) {
      setRecentSearches(JSON.parse(searches));
    }
  }, []);

  // 디바운스 처리
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchValue]);

  const { data } = useQuery({
    queryKey: ["recommendedSearches", debouncedSearchValue],
    queryFn: async () => {
      const encodedSearchValue = encodeURIComponent(debouncedSearchValue);
      const response = await axios.get(`/api/v1/search-conditions/?name=${encodedSearchValue}`);

      console.info("calling api");
      return response.data;
    },
    enabled: !!debouncedSearchValue,
  });

  useEffect(() => {
    if (data) {
      setRecommendedSearches(data);
    }
  }, [data]);

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
              <DropdownItem key={index} searchValue={searchValue} search={search.name} />
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
