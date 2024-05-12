import { useState, useEffect } from "react";
import axios from "axios";

const useSearchSuggestions = (searchQuery: string) => {
  const API_URL = "/api/v1/search-conditions/?name=";
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchQuery) {
        setSuggestions([]);
        return;
      }
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}${searchQuery}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Failed to fetch suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300); // 300ms delay
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return { suggestions, loading };
};

export default useSearchSuggestions;
