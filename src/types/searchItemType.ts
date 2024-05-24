type LocationType = {
  city: string;
};

export type SearchItemType = {
  id: number;
  ct_id: string;
  from_type: number;
  url: string;
  locations: LocationType[];
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
  survey_id: null;
  is_new: boolean;
  created_at: string;
};
