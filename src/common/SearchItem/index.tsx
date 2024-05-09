import classNames from "classnames/bind";
import style from "./index.module.scss";
import { SearchItemType } from "@/types/searchItemType";
import { formatDate } from "@/utils/formatDate";
import bookmark from "@/assets/images/bookmark.svg";
// import bookmarkFill from "@/assets/images/bookmarkFill.svg";

const cx = classNames.bind(style);

interface SearchItemProps {
  item: SearchItemType;
}

export default function SearchItem({ item }: SearchItemProps) {
  const mapItem: string[] = [];
  item.phases.map((phase) => {
    mapItem.push(phase);
  });
  mapItem.push(item.gender);

  return (
    <div className={cx("container")}>
      <a
        className={cx("link-container")}
        href={`https://clinicaltrialskorea.com/studies/${item.id}`}
      >
        <div className={cx("item-container")}>
          <div className={cx("top-container")}>
            <p className={cx("sponsor-name")}>{item.lead_sponsor_name}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <img className={cx("bookmark")} src={bookmark} alt="bookmark" />
            </button>
          </div>

          <div className={cx("mid-container")}>
            <p className={cx("summary")}>{item.title}</p>
          </div>

          <div className={cx("bottom-container")}>
            <p className={cx("detail")}>실시기관지역 | </p>
            <p className={cx("detail")}>모집 마감일 | {formatDate(item.completion_date)}</p>
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
