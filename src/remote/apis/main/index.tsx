import axios from "axios";

export const getSearchResults = async (name: string) => {
  try {
    console.log("calling api...");
    const response = await axios.get(`/api/v1/search-conditions?name=${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};
