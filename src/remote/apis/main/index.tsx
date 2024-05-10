import axios from "axios";

export const getSearchLists = async (name: string) => {
  try {
    console.info("calling api...");
    const response = await axios.get(`/api/v1/search-conditions?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export const getSearchResults = async (
  pageParam: number,
  limit: number,
  name: string
) => {
  try {
    const response = await axios.get(
      `/api/v1/studies/?offset=${pageParam}&limit=${limit}&conditions=${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
