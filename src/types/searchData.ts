export type SearchDataType = {
  lead_sponsor_name: string;
  title: string;
  locations: LocationDataType[];
  completion_date: string;
  phases: string;
  url: string;
  // 여기서부터 태그 or 기타 사용처에 들어갈 수 있는 정보
  gender: string; // 성별 제한
  ct_id: string; // Clinical Trial ID
  start_date: string; // 시작일
  brief_summary: string; // 간단한 설명
  minimum_age_display: string; // 최소 연령
  maximum_age_display: string; // 최대 연령
  created_at: string; // 생성일
  is_sponsor: boolean; // 스폰서인지 여부
  is_new: boolean; // 새로운 연구인지 여부
};

export type LocationDataType = {
  city: string;
  country: string;
};
