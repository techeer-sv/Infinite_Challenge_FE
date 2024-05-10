import classNames from "classnames/bind";
import style from "./index.module.scss";
import { SearchItemType } from "@/types/searchItemType";
import { formatDate } from "@/utils/formatDate";
import bookmark from "@/assets/images/bookmark.svg";
import { PageType } from "@/types/pageType";
import bookmarkFill from "@/assets/images/bookmarkFill.svg";
import { MouseEvent, useState } from "react";
import Modal from "../Modal";
import useModal from "@/hooks/useModal";

const cx = classNames.bind(style);

interface SearchItemProps {
  searchItem: SearchItemType;
  isPage: PageType;
}

export default function SearchItem({ searchItem, isPage }: SearchItemProps) {
  const mapItem: string[] = [];
  searchItem.phases.map((phase) => {
    mapItem.push(phase);
  });
  mapItem.push(searchItem.gender);

  const [bookmarks, setBookmarks] = useState<SearchItemType[]>([]);
  const { isOpen, openModal, closeModal, deleteBookmark } = useModal({ searchItem, setBookmarks });

  const handleBookmark = (searchResult: SearchItemType, e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const currentBookmarks = JSON.parse(localStorage.getItem("bookmarksData") || "[]");
    setBookmarks(currentBookmarks);

    const exists = currentBookmarks.some(
      (bookmark: SearchItemType) => bookmark.id === searchResult.id
    );

    if (!exists) {
      localStorage.setItem("bookmarksData", JSON.stringify([...currentBookmarks, searchResult]));
      setBookmarks([...currentBookmarks, searchResult]);
    } else {
      if (isPage === "bookmark") {
        openModal();
      } else {
        const newBookmarks = currentBookmarks.filter(
          (bookmark: SearchItemType) => bookmark.id !== searchItem.id
        );
        localStorage.setItem("bookmarksData", JSON.stringify(newBookmarks));
        setBookmarks([...newBookmarks]);
      }
    }
  };

  const isBookmarked = (id: number): boolean => {
    const bookmarksData = localStorage.getItem("bookmarksData");
    if (!bookmarksData) return false;

    const bookmarks = JSON.parse(bookmarksData) as SearchItemType[];
    return bookmarks.some((bookmark) => bookmark.id === id);
  };

  return (
    <div className={cx("container")}>
      {isOpen && <Modal isOpen={isOpen} onConfirm={deleteBookmark} onCancel={closeModal} />}

      <a
        className={cx("link-container")}
        href={`https://clinicaltrialskorea.com/studies/${searchItem.id}`}
      >
        <div className={cx("item-container")}>
          <div className={cx("top-container")}>
            <p className={cx("sponsor-name")}>{searchItem.lead_sponsor_name}</p>
            <button onClick={(e) => handleBookmark(searchItem, e)}>
              <img
                className={cx("bookmark")}
                src={isBookmarked(searchItem.id) ? bookmarkFill : bookmark}
                alt="bookmark"
              />
            </button>
          </div>

          <div className={cx("mid-container")}>
            <p className={cx("summary")}>{searchItem.title}</p>
          </div>

          <div className={cx("bottom-container")}>
            <p className={cx("detail")}>실시기관지역 | </p>
            <time className={cx("detail")}>
              모집 마감일 | {formatDate(searchItem.completion_date)}
            </time>
          </div>

          <div className={cx("tag-container")}>
            {mapItem.map((tag) => (
              <p key={tag} className={cx("tag")}>
                {tag}
              </p>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
