import classNames from "classnames/bind";
import style from "./index.module.scss";
import noSearch from "@/assets/images/noSearch.svg";

const cx = classNames.bind(style);

export default function NoSearchResult() {
  return (
    <div className={cx("container")}>
      <img className={cx("search-icon")} src={noSearch} alt="noSearchResult" />
      <h3 className={cx("title")}>현재 모집 중인 임상시험이 없습니다.</h3>
      <p className={cx("description")}>
        {
          "원하시는 결과가 없나요?\n아래 ‘임상시험 소식받기’를 통해 간단한 정보만 입력해주시면 해당 조건에 맞는\n새로운 임상시험이 등록 되었을 때 빠르게 알려드리겠습니다."
        }
      </p>
    </div>
  );
}
