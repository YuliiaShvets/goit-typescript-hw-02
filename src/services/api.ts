import axios from "axios";
import  Image  from "../types/image";

const API_KEY = 'riZB31udg9aqPphNaL5MUSs8kj3Y12iD9xKgSJYzBz4';
const BASE_URL = 'https://api.unsplash.com/search/photos';

interface Response {
  results: Image[];
}

const fetchImages = async (query: string, page: number): Promise<Image[]> => {
  if (!query.trim()) {
    return [];
  }

  try {
    const response = await axios.get<Response>(BASE_URL, {
      params: {
        query,
        client_id: API_KEY,
        per_page: 12,
        page,
      },
    });

    return response.data.results;
  } catch (error: any) {
    console.error(
      "Error fetching images:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch pictures");
  }
};

export default fetchImages;