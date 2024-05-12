import { SearchResultList } from "../types";
import SearchCard from "./SearchCard";
// TODO api 연결을 통해 데이터 받도록 처리
const dummyData = {
  count: 8,
  next: null,
  previous: null,
  sponsored_studies: [],
  results: [
    {
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
        "본 시험의 목적은 이전 VEGFR 표적 요법 후 진행한 RAI 저항성 DTC 시험대상자에서 위약과 비교하여 카보잔티닙이 PFS 및 ORR에 미치는 영향을 평가하는 것이다.",
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2021-10-26T19:18:06.531105",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/27142/",
      id: 27142,
      ct_id: "202100156",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["연구자 임상시험"],
      minimum_age_display: "18세",
      maximum_age_display: "65세",
      title:
        "갑상선 전절제술을 시행받는 환자에서 수술 전 비타민 D(디맥정 30,000 IU) 경구 투여의 수술 후 저칼슘혈증 예방 효용성 연구",
      start_date: "2020-12-01",
      completion_date: "2022-12-01",
      lead_sponsor_name: "서울대학교병원",
      brief_summary:
        "수술 전 비타민 D3(cholecalciferol) 경구 복용의 수술 후 저칼슘혈증 예방효과를 증명하고자 하는 연구자 임상시험이다.",
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2022-05-12T13:47:12.640427",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/26718/",
      id: 26718,
      ct_id: "202100581",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["연구자 임상시험"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "폐경 후 여성에서 갑상선암 치료 후 TSH 억제요법으로 기인한 골 소실에 대한 디맥의 예방적 효과",
      start_date: "2021-05-01",
      completion_date: "2024-05-01",
      lead_sponsor_name: "서울대학교병원",
      brief_summary:
        "갑상선암 치료 후 갑상선 호르몬 억제요법 중인 낮은 골밀도를 보이는 폐경 후 여성에서 디맥의 예방적 효과를 무작위 공개임상 연구로 증명하고자 한다.",
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2022-05-12T13:11:21.265256",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/564644/",
      id: 564644,
      ct_id: "202200870",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["2상"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "INV-001 투여 시 갑상선절제술 후 흉터 예방에 대한 유효성 및 안전성을 평가하기 위한 무작위배정, 이중눈가림, 위약대조, 제2상 임상시험",
      start_date: "2022-12-01",
      completion_date: "2024-05-01",
      lead_sponsor_name: "(주)이노보테라퓨틱스",
      brief_summary: null,
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2023-03-21T00:33:49.372454",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/28325/",
      id: 28325,
      ct_id: "202000095",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["3상"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "키나아제 억제제 투여 경험이 없는, 진행된, 진행성, RET-돌연변이 갑상선 수질암 환자에서, 셀퍼카티닙과 의사가 선택한 카보잔티닙 또는 반데타닙을 비교하는 다기관, 무작위배정, 공개, 제3상 시험(LIBRETTO-531)",
      start_date: "2020-01-01",
      completion_date: "2024-07-01",
      lead_sponsor_name: "한국릴리",
      brief_summary:
        "[일차 목적]\n• 카보잔티닙 또는 반데타닙 대비 셀퍼카티닙을 투여받은 진행된, 진행성, 키나아제\n억제제 투여 경험이 없는, RET-돌연변이 MTC 환자의 TFFS를 비교한다.(BICR에 의한 TFFS)\n\n[이차 목적]\n• 카보잔티닙 또는 반데타닙 대비 셀퍼카티닙을 투여받은 진행된, 진행성, 키나아제 억제제 투여 경험이 없는, RET-돌연변이 MTC 환자에서 관찰된, RECIST 1.1 기준에 따른 기타 유효성 결과를 비교한다.\n• 카보잔티닙 또는 반데타닙 대비 셀퍼카티닙의 안전성과 내약성을 평가한다.\n• 카보잔티닙 또는 반데타닙 대비 셀퍼카티닙의 내약성을 비교한다.\n• 현지 RET 실험실 검사의 수행 결과를 단회, 중앙 검사와 비교 평가한다.\n• 셀퍼카티닙을 투여받는 환자들에서 셀퍼카티닙의 PK 를 평가한다.",
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2021-10-26T18:27:08.304546",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/542953/",
      id: 542953,
      ct_id: "202200790",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["연구자 임상시험"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "원격전이를 동반한 분화갑상선암에서 PSMA 발현과 방사성 요오드 섭취 정도 비교",
      start_date: "2022-10-01",
      completion_date: "2024-10-01",
      lead_sponsor_name: "한국원자력의학원 원자력병원",
      brief_summary: null,
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2022-10-13T00:00:25.447321",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/210533/",
      id: 210533,
      ct_id: "202200421",
      locations: [
        {
          city: "서울",
        },
      ],
      phases: ["3상"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "RET-돌연변이 갑상선 수질암 치료를 위한 프랄세티닙 대 표준 치료의 제3상, 무작위 배정, 공개 임상시험",
      start_date: "2022-03-01",
      completion_date: "2034-07-01",
      lead_sponsor_name: "피피디디벨럽먼트피티이엘티디",
      brief_summary: null,
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2022-05-20T00:01:54.084129",
    },
    {
      from_type: 1,
      url: "https://api.clinicaltrialskorea.com/api/v1/studies/26836/",
      id: 26836,
      ct_id: "202100463",
      locations: [
        {
          city: "경기도",
        },
      ],
      phases: ["연구자 임상시험"],
      minimum_age_display: "18세",
      maximum_age_display: null,
      title:
        "갑상선 절제술 및 경부 종괴 적출술 후 보툴리눔 독소 주입과 CO2 레이져 복합요법의 경부 반흔 예방 효과",
      start_date: "2021-04-01",
      completion_date: "2022-02-01",
      lead_sponsor_name: "가톨릭대학교성빈센트병원",
      brief_summary:
        "경부 절개를 통해 종양을 적출하는 갑상선절제술 및 경부 종양 절제술 환자에서 수술 시 절개 부위의 보툴리눔 독소 주입술과 절제적 CO2 레이저 치료의 병행 요법이 반흔 예방에 보다 우수하여 미용적 효과 및 환자의 만족감을 상승시킬 수 있음을 알아 보고자 함.\n또한 상처 치유 과정에서 보툴리눔 독소가 레이저 치료의 반흔 제거 시술 효과를 상승시키는 결과를 보일 수 있음을 확인하고자 함",
      gender: "남녀모두",
      is_sponsor: false,
      survey_id: null,
      is_new: false,
      created_at: "2022-05-12T13:21:53.749473",
    },
  ],
};

interface ISearchResult {
  list?: SearchResultList;
}

const SearchResult = ({ list }: ISearchResult) => {
  list = dummyData;

  return (
    <div className="my-5 flex justify-center">
      <div className="grid grid-cols-2 gap-4">
        {list.results.map((item, index) => (
          <SearchCard
            key={index}
            title={item.lead_sponsor_name}
            description={item.title || ""}
            region={item.locations.map((loc) => loc.city).join(", ") || "-"}
            period={item.completion_date}
            tagList={item.phases}
            toggleChecked={false}
            onToggleClick={() => console.log("북마크")}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
