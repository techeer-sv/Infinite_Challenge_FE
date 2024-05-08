import classNames from "classnames/bind";
import style from "./index.module.scss";
import { ReactNode } from "react";

const cx = classNames.bind(style);

interface SearchItemLayoutProps {
  children: ReactNode;
}

export default function SearchItemLayout({ children }: SearchItemLayoutProps) {
  return <div className={cx("list-container")}>{children}</div>;
}
