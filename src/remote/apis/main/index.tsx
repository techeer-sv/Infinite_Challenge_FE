import axios from "axios";

export const getSearchLists = async (name: string) => {
  try {
    console.log("calling api...");
    const response = await axios.get(`/api/v1/search-conditions?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

export const getSearchResults = async (name: string) => {
  try {
    const response = await axios.get(
      `/api/v1/studies/?offset=0&limit=10&conditions=${name}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
