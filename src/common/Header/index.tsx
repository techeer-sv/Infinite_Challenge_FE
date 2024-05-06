import classNames from "classnames/bind";
import style from "./index.module.scss";
import logo from "@/assets/images/logo.svg";

const cx = classNames.bind(style);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("inner-header")}>
        <img src={logo} alt="logo" />

        <nav>
          <ul>
            <li>
              <a className={cx("nav-items")} href="/bookmarks">
                즐겨찾기
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
