import classNames from "classnames/bind";
import style from "./index.module.scss";

const cx = classNames.bind(style);

export default function Loading() {
  return (
    <div className={cx("container")}>
      <div className={cx("spinner")} />
      <p className={cx("text")}>로딩중...</p>
    </div>
  );
}
