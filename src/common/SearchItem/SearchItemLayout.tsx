import classNames from "classnames/bind";
import style from "./index.module.scss";
import { StrictPropsWithChildren } from "@/types/StrictPropsWithChildren";

const cx = classNames.bind(style);

export default function SearchItemLayout({ children }: StrictPropsWithChildren) {
  return <div className={cx("list-container")}>{children}</div>;
}
