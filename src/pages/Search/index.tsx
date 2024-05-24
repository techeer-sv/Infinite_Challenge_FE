import classNames from "classnames/bind";
import style from "./index.module.scss";
import Header from "@/common/Header";
import SearchInput from "@/common/SearchInput";
import { useEffect, useState } from "react";
import { SearchItemType } from "@/types/searchItemType";
import SearchItemLayout from "@/common/SearchItem/SearchItemLayout";
import SearchItem from "@/common/SearchItem";
import NoSearchResult from "@/components/NoSearchResult";
import useBookmark from "@/hooks/useBookmark";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(style);

export default function Search() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<SearchItemType[]>([]);
  const { bookmarks, setBookmarks } = useBookmark();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  useEffect(() => {
    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className={cx("container")}>
      <Header />

      <div className={cx("blue-container")}>
        <h1 className={cx("title")}>{"국내 모든 임상시험 검색하고\n온라인으로 참여하기"}</h1>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setSearchResult={setSearchResult}
        />
      </div>

      <div className={cx("result-container")}>
        {searchValue.length > 0 && searchResult.length > 0 ? (
          <SearchItemLayout>
            {searchResult.map((item) => (
              <SearchItem
                key={item.id}
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                searchItem={item}
                isPage="search"
              />
            ))}
          </SearchItemLayout>
        ) : (
          <NoSearchResult />
        )}
      </div>
    </div>
  );
}
