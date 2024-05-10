import classNames from "classnames/bind";
import style from "./index.module.scss";
import Header from "@/common/Header";
import SearchItem from "@/common/SearchItem";
import SearchItemLayout from "@/common/SearchItem/SearchItemLayout";
import { SearchItemType } from "@/types/searchItemType";
import { useEffect, useState } from "react";

const cx = classNames.bind(style);

export default function Bookmark() {
  const [bookmarks, setBookmarks] = useState<SearchItemType[]>([]);

  useEffect(() => {
    const storedBookmarks = localStorage.getItem("bookmarksData");
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  return (
    <>
      <Header />

      {bookmarks.length > 0 ? (
        <SearchItemLayout>
          {bookmarks.map((item: SearchItemType) => (
            <SearchItem key={item.id} searchItem={item} isPage="bookmark" />
          ))}
        </SearchItemLayout>
      ) : (
        <p className={cx("message")}>북마크가 없습니다.</p>
      )}
    </>
  );
}
