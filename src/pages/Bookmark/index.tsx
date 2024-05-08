import classNames from "classnames/bind";
import style from "./index.module.scss";
import Header from "@/common/Header";
import SearchItem from "@/common/SearchItem";

const cx = classNames.bind(style);

// 임시 데이터
const testDate = {
  from_type: 1,
  url: "https://api.clinicaltrialskorea.com/api/v1/studies/29262/",
  id: 29262,
  ct_id: "201900132",
  locations: [],
  phases: ["3상"],
  minimum_age_display: "18세",
  maximum_age_display: null,
  title:
    "이전 VEGFR 표적 요법 후 진행한 방사성요오드 치료저항성 분화 갑상선암 시험대상자에서 카보잔티닙(XL184)에 대한 제3상, 무작위배정, 이중 눈가림, 위약 대조 시험",
  start_date: "2019-01-01",
  completion_date: "2022-08-01",
  lead_sponsor_name: "파머수티컬리서치어소시에이츠코리아",
  brief_summary:
    "이전에 전이성 췌관 선암종에 대한 치료를 받지 않은 시험대상자를 대상으로 SBP-101과 병용하거나 병용하지 않은 냅-파클리탁셀 및 젬시타빈에 대한 무작위배정, 이중눈가림, 위약 대조 임상시험",
  gender: "남녀모두",
  is_sponsor: false,
  survey_id: null,
  is_new: false,
  created_at: "2021-10-26T19:18:06.531105",
};

export default function Bookmark() {
  return (
    <>
      <Header />

      <div className={cx("list-container")}>
        <SearchItem item={testDate} />
        <SearchItem item={testDate} />
        <SearchItem item={testDate} />
      </div>
    </>
  );
}
