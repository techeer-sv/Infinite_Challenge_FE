import { useEffect, useState } from "react";
import { SearchItemType } from "@/types/searchItemType";

export default function useBookmark() {
  const [bookmarks, setBookmarks] = useState<SearchItemType[]>([]);

  useEffect(() => {
    getBookmarksStorage();
  }, []);

  const getBookmarksStorage = () => {
    setBookmarks(JSON.parse(localStorage.getItem("bookmarksData") as string) || []);
  };

  const setBookmarksStorage = (bookmarks: SearchItemType[]) => {
    localStorage.setItem("bookmarksData", JSON.stringify(bookmarks));
  };

  return { bookmarks, setBookmarks, getBookmarksStorage, setBookmarksStorage };
}
