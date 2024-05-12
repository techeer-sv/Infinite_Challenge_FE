import { useState, useEffect } from "react";
import axios from "axios";

// const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const API_URL = "/api/v1/studies/?offset=0&limit=10&conditions=";

function useSearchResults(searchQuery: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) return; // 검색어가 없으면 요청을 보내지 않음

    const fetchData = async () => {
      setLoading(true);
      try {
        const url = `${API_URL}${encodeURIComponent(searchQuery)}`;
        const response = await axios.get(url);
        setData(response.data.results || []); // API 응답 구조에 따라 조정
        setError(null);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return { searchData: data, loading, error };
}

export default useSearchResults;
