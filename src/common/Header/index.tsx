import classNames from "classnames/bind";
import style from "./index.module.scss";
import logo from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

export default function Header() {
  return (
    <header className={cx("header")}>
      <div className={cx("inner-header")}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav>
          <ul>
            <li>
              <Link className={cx("nav-items")} to="/bookmarks">
                즐겨찾기
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
