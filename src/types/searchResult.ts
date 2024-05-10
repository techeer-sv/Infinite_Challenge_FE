export type SearchResult = {
  count: number;
  next: string | null;
  previous: string | null;
  sponsored_studies: [];
  results: {
    from_type: number;
    url: string;
    id: number;
    ct_id: string;
    locations: { city: string }[];
    phases: string[];
    minimum_age_display: string;
    maximum_age_display: string | null;
    title: string;
    start_date: string;
    completion_date: string;
    lead_sponsor_name: string;
    brief_summary: string;
    gender: string;
    is_sponsor: boolean;
    survey_id: string | null;
    is_new: boolean;
    created_at: string;
  }[];
};

export type ResultListType = {
  from_type: number;
  url: string;
  id: number;
  ct_id: string;
  locations: { city: string }[];
  phases: string[];
  minimum_age_display: string;
  maximum_age_display: string | null;
  title: string;
  start_date: string;
  completion_date: string;
  lead_sponsor_name: string;
  brief_summary: string;
  gender: string;
  is_sponsor: boolean;
  survey_id: string | null;
  is_new: boolean;
  created_at: string;
};
