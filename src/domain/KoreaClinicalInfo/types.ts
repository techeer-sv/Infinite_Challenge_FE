export interface SearchKeywordType {
  id: number;
  name: string;
}

export interface SearchResultList {
  count: number;
  next: string | null;
  previous: string | null;
  sponsored_studies: string[];
  results: SearchResult[];
}

export interface SearchResult {
  from_type: number;
  url: string;
  id: number;
  ct_id: string;
  locations: Location[];
  phases: string[];
  minimum_age_display: string;
  maximum_age_display: string | null;
  title: string;
  start_date: string;
  completion_date: string;
  lead_sponsor_name: string;
  brief_summary: string | null;
  gender: string;
  is_sponsor: boolean;
  survey_id: number | null;
  is_new: boolean;
  created_at: string;
}

interface Location {
  city: string;
}
